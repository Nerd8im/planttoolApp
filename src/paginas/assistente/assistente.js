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

import { estilos } from './estiloAssistente';

export default function Assistente() {

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
    console.log("Input de texto:", inputText);
    console.log("Imagem selecionada:", selectedImage);
    const [isTyping, setIsTyping] = useState(false);
    const flatListRef = useRef(null);
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            flatListRef.current?.scrollToEnd({ animated: true });
        }, 200);
    }, [messages, isTyping]);

    // ------------------------------------------------------
    // 📸 PICK IMAGE – AGORA FUNCIONAL NO EXPO
    // ------------------------------------------------------
    const pickImage = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
            alert("Permissão negada.");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.8,
        });

        if (!result.canceled) {
            setSelectedImage({
                uri: result.assets[0].uri,
                name: "imagem.jpg",
                type: "image/jpeg",
            });
        }
    };

    const removeSelectedImage = () => setSelectedImage(null);

    // ------------------------------------------------------
    // 🔥 ENVIA PARA API
    // ------------------------------------------------------
    const sendMessageToAI = async (userText, imageAsset) => {
        console.log(userText, imageAsset)

        if (!imageAsset || imageAsset===null) return "Por favor, envie uma imagem!";

        try {
            const token = await AsyncStorage.getItem('tokenSessao');
            // await AsyncStorage.clear()

            const formData = new FormData();
            formData.append('text', userText || '');

            if (imageAsset) {
                formData.append("foto", {
                    uri: imageAsset.uri,
                    name: imageAsset.name,
                    type: imageAsset.type,
                });
            }

            const url = "https://planttool-tcc-production-1d76.up.railway.app/planttool/v1/gemini";

            setIsTyping(true);
            console.log(formData)
            await new Promise(r => setTimeout(r, 1500));
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                
                },
                body: formData
            });

            let data = await response.json();
            data = JSON.parse(data.descricao);
            console.log(data);

            setIsTyping(false);
            return data.message;

        } catch (err) {
            console.error("Erro no envio:", err);
            return "Erro ao analisar a imagem.";
        }
    };

    // ------------------------------------------------------
    // 📤 ENVIO DA MENSAGEM
    // ------------------------------------------------------
    const handleSend = async () => {
        if (inputText.trim() === '' && !selectedImage) return;

        const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setInputText(inputText.trim());
        setSelectedImage(selectedImage);

        const newMessage = {
            id: Date.now().toString(),
            text: inputText || '',
            image: selectedImage?.uri,
            sender: 'user',
            time: now,
        };

        
        const aiReply = await sendMessageToAI(newMessage.text, { uri: newMessage.image });
        
        setMessages(prev => [...prev, newMessage]);
        setInputText('');
        setSelectedImage(null);
        setIsTyping(true);
        
        setMessages(prev => [
            ...prev,
            {
                id: (Date.now() + 100).toString(),
                text: aiReply,
                sender: 'ai',
                time: now,
            }
        ]);

        setIsTyping(false);
    };

    // ------------------------------------------------------
    // 💬 RENDER MENSAGEM
    // ------------------------------------------------------
    const renderItem = ({ item }) => {
        const isUser = item.sender === 'user';

        return (
            <View style={[estilos.messageRow, isUser ? estilos.messageRowUser : estilos.messageRowAi]}>
                <View style={[estilos.messageBubble, isUser ? estilos.messageBubbleUser : estilos.messageBubbleAi]}>
                    <View style={[estilos.bubbleArrow, isUser ? estilos.bubbleArrowUser : estilos.bubbleArrowAi]} />

                    {item.image && (
                        <View style={estilos.messageImageContainer}>
                            <Image source={{ uri: item.image }} style={estilos.messageImage} />
                        </View>
                    )}

                    {!!item.text && (
                        <Text style={[estilos.messageText, isUser ? estilos.textUser : estilos.textAi]}>
                            {item.text}
                        </Text>
                    )}

                    <Text style={[estilos.messageTime, isUser ? estilos.timeUser : estilos.timeAi]}>
                        {item.time}
                    </Text>
                </View>
            </View>
        );
    };

    // ------------------------------------------------------
    // 🖥️ INTERFACE
    // ------------------------------------------------------
    return (
        <SafeAreaView style={estilos.container}>
            <StatusBar barStyle="light-content" backgroundColor="#1C6B46" />

            {/* HEADER */}
            <View style={estilos.header}>
                <BlurView intensity={40} tint="light" style={estilos.glassEffect} />

                <View style={estilos.headerContentLeft}>
                    <TouchableOpacity style={estilos.iconButton} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="#FFF" />
                        <Text style={estilos.backText}>Voltar</Text>
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

            {/* CHAT */}
            <View style={estilos.chatBackground}>
                <View style={estilos.dateBadgeContainer}>
                    <View style={estilos.dateBadge}>
                        <Text style={estilos.dateBadgeText}>Hoje</Text>
                    </View>
                </View>

                <FlatList
                    ref={flatListRef}
                    data={messages}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={estilos.messagesList}
                    showsVerticalScrollIndicator={false}
                    onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
                />

                {isTyping && (
                    <View style={estilos.typingContainer}>
                        <View style={estilos.typingBubble}>
                            <ActivityIndicator size="small" color="#9CA3AF" />
                        </View>
                    </View>
                )}
            </View>

            {/* INPUT */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
                style={estilos.inputArea}
            >
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

                <View style={estilos.inputControls}>
                    <View style={estilos.inputWrapper}>
                        <TouchableOpacity onPress={pickImage} style={estilos.clipButton}>
                            <Ionicons
                                name="attach"
                                size={24}
                                color={selectedImage ? "#1C6B46" : "#9CA3AF"}
                            />
                        </TouchableOpacity>

                        <TextInput
                            style={estilos.textInput}
                            value={inputText}
                            onChangeText={setInputText}
                            placeholder={selectedImage ? "Adicione uma legenda..." : "Digite uma mensagem..."}
                            placeholderTextColor="#9CA3AF"
                            multiline
                        />

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
