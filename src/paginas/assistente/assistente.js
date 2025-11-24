import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator,
    SafeAreaView,
    StatusBar
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

// Importa os estilos específicos para este componente
import { estilos } from './estiloAssistente';

export default function Assistente() {

    // 1. Estados do Componente
    const [messages, setMessages] = useState([
        {
            id: '1',
            text: "Olá! Sou sua assistente virtual de jardinagem. Como posso ajudar suas plantas hoje?",
            sender: 'ai',
            time: '09:00',
            image: null,
        }
    ]);

    const [inputText, setInputText] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [isTyping, setIsTyping] = useState(false);

    // Referência para a lista de mensagens para rolagem automática
    const flatListRef = useRef(null);
    const navigation = useNavigation();

    // 2. Efeitos
    // Efeito para rolar automaticamente para a última mensagem quando o chat for atualizado
    useEffect(() => {
        setTimeout(() => {
            flatListRef.current?.scrollToEnd({ animated: true });
        }, 200);
    }, [messages, isTyping]);

    // 3. Funções de Manipulação

    // Função para abrir a biblioteca de imagens e selecionar uma foto
    const pickImage = async () => {
        // Solicita permissões de acesso à galeria
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
            alert("Permissão negada.");
            return;
        }

        // Abre a biblioteca de imagens
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.8,
            allowsEditing: false,
        });

        if (!result.canceled) {
            const asset = result.assets[0];
            const fileExtension = asset.uri.split('.').pop();
            // Define o MIME type correto para o upload
            const mimeType = fileExtension === 'png' ? 'image/png' : 'image/jpeg';

            // Armazena a imagem selecionada no formato esperado pelo FormData
            setSelectedImage({
                uri: asset.uri,
                name: `imagem.${fileExtension}`,
                type: mimeType,
            });
        }
    };

    // Função para remover a imagem selecionada
    const removeSelectedImage = () => setSelectedImage(null);

    // Função principal para enviar a mensagem (texto + imagem) para a API Gemini
    const sendMessageToAI = async (userText, imageAsset) => {
    setIsTyping(true);

    // Exige imagem para analisar
    if (!imageAsset) {
        setIsTyping(false);
        return "Por favor, envie uma imagem para análise.";
    }

    try {
        // Delay de 5 segundos para simular requisição real
        await new Promise(resolve => setTimeout(resolve, 5000));

        // Resposta simulada
        return "Sua planta parece saudável! Continue regando regularmente e mantenha ela em ambiente iluminado.";
    } catch (err) {
        return "Erro na simulação da IA.";
    } finally {
        setIsTyping(false);
    }
};

    // Função para preparar e enviar a mensagem (usuário)
    const handleSend = async () => {
        // Não envia se não houver texto ou imagem
        if (inputText.trim() === '' && !selectedImage) return;

        const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const textToSend = inputText.trim();
        const imageAssetToSend = selectedImage;

        // Cria a mensagem do usuário
        const userMessage = {
            id: Date.now().toString(),
            text: textToSend || '',
            image: imageAssetToSend?.uri,
            sender: 'user',
            time: now,
        };

        // Adiciona a mensagem do usuário ao chat
        setMessages(prev => [...prev, userMessage]);

        // Limpa o input e a imagem
        setInputText('');
        setSelectedImage(null);

        // Envia para a IA e espera a resposta
        const aiReply = await sendMessageToAI(textToSend, imageAssetToSend);

        // Adiciona a resposta da IA ao chat
        setMessages(prev => [
            ...prev,
            {
                id: (Date.now() + 100).toString(),
                text: aiReply,
                sender: 'ai',
                time: now,
            }
        ]);
    };

    // Função de renderização para cada item da lista (bolhas de chat)
    const renderItem = ({ item }) => {
        const isUser = item.sender === 'user';

        return (
            <View style={[estilos.messageRow, isUser ? estilos.messageRowUser : estilos.messageRowAi]}>
                <View style={[estilos.messageBubble, isUser ? estilos.messageBubbleUser : estilos.messageBubbleAi]}>
                    {/* Seta da bolha */}
                    <View style={[estilos.bubbleArrow, isUser ? estilos.bubbleArrowUser : estilos.bubbleArrowAi]} />

                    {/* Exibe imagem, se houver */}
                    {item.image && (
                        <View style={estilos.messageImageContainer}>
                            <Image source={{ uri: item.image }} style={estilos.messageImage} />
                        </View>
                    )}

                    {/* Exibe texto, se houver */}
                    {!!item.text && (
                        <Text style={[estilos.messageText, isUser ? estilos.textUser : estilos.textAi]}>
                            {item.text}
                        </Text>
                    )}

                    {/* Hora da mensagem */}
                    <Text style={[estilos.messageTime, isUser ? estilos.timeUser : estilos.timeAi]}>
                        {item.time}
                    </Text>
                </View>
            </View>
        );
    };

    // 4. Renderização do Componente
    return (
        <SafeAreaView style={estilos.container}>
            <StatusBar barStyle="light-content" backgroundColor="#1C6B46" />

            {/* Cabeçalho */}
            <View style={estilos.header}>
                <BlurView intensity={40} tint="light" style={estilos.glassEffect} />

                <View style={estilos.headerContentLeft}>
                    <TouchableOpacity style={estilos.iconButton} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="#FFF" />
                        <Text style={estilos.backText}></Text>
                    </TouchableOpacity>

                    <View style={estilos.avatarContainer}>
                        <FontAwesome5 name="robot" size={20} color="#FFF" />
                    </View>

                    <View>
                        <Text style={estilos.headerTitle}>PlantBot IA</Text>
                        <View style={estilos.onlineBadge}>
                            <View style={estilos.onlineDot} />
                            <Text style={estilos.onlineText}>Online</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={estilos.iconButton}>
                    <Ionicons name="ellipsis-vertical" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>

            {/* Área do Chat */}
            <View style={estilos.chatBackground}>
                {/* Badge de Data */}
                <View style={estilos.dateBadgeContainer}>
                    <View style={estilos.dateBadge}>
                        <Text style={estilos.dateBadgeText}>Hoje</Text>
                    </View>
                </View>

                {/* Lista de Mensagens */}
                <FlatList
                    ref={flatListRef}
                    data={messages}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={estilos.messagesList}
                    showsVerticalScrollIndicator={false}
                    onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
                />

                {/* Indicador de Digitação da IA */}
                {isTyping && (
                    <View style={estilos.typingContainer}>
                        <View style={estilos.typingBubble}>
                            <ActivityIndicator size="small" color="#9CA3AF" />
                        </View>
                    </View>
                )}
            </View>

            {/* Área de Input e Teclado */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
                style={estilos.inputArea}
            >
                {/* Pré-visualização da Imagem Anexada */}
                {selectedImage && (
                    <View style={estilos.previewContainer}>
                        <View style={estilos.previewContent}>
                            <Image source={{ uri: selectedImage.uri }} style={estilos.previewImage} />
                            <View>
                                <Text style={estilos.previewTitle}>Imagem anexada</Text>
                                <Text style={estilos.previewSubtitle}>Pronta para enviar</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={removeSelectedImage} style={estilos.closeButton}>
                            <Ionicons name="close" size={16} color="#EF4444" />
                        </TouchableOpacity>
                    </View>
                )}

                {/* Controles de Input */}
                <View style={estilos.inputControls}>
                    <View style={estilos.inputWrapper}>
                        {/* Botão de Anexar Imagem */}
                        <TouchableOpacity onPress={pickImage} style={estilos.clipButton}>
                            <Ionicons
                                name="attach"
                                size={24}
                                color={selectedImage ? "#1C6B46" : "#9CA3AF"}
                            />
                        </TouchableOpacity>

                        {/* Campo de Texto */}
                        <TextInput
                            style={estilos.textInput}
                            value={inputText}
                            onChangeText={setInputText}
                            placeholder={selectedImage ? "Adicione uma legenda..." : "Digite uma mensagem..."}
                            placeholderTextColor="#9CA3AF"
                            multiline
                        />

                        {/* Botão de Enviar */}
                        <TouchableOpacity
                            onPress={handleSend}
                            disabled={inputText.trim() === '' && !selectedImage}
                            style={estilos.sendButton}
                        >
                            {(inputText.trim() !== '' || selectedImage) ? (
                                <LinearGradient
                                    colors={['#2d5a42', '#4a7c5f']}
                                    style={{ width: '100%', height: '100%', borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <MaterialIcons name="send" size={20} color="#FFF" />
                                </LinearGradient>
                            ) : (
                                <View style={estilos.sendButtonDisabled}>
                                    <MaterialIcons name="send" size={20} color="#FFF" />
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}