import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import style from './estiloLogin.js'

export default function Login({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('')

    async function logarUsuario(email, senha) {
        if (email && senha.length > 4) {
            try {
                const rotaBase = process.env.EXPO_PUBLIC_API_ROTA
                const dados = { email, senha: senha }
                const url = `${rotaBase}/login`

                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dados),
                })

                if (!response.ok) {
                    throw new Error('Erro na resposta da API: ' + response.status)
                }

                const responseData = await response.json()
                console.log('Resposta da API:', responseData)



                await AsyncStorage.setItem('tokenSessao', responseData.tokenUsuario)
                console.log(responseData)

                await AsyncStorage.setItem('emailUser', responseData.dadosUsuario.user_email)
                console.log(responseData)

                navigation.reset({
                    index: 0,
                    routes: [{ name: 'DrawerNav' }] // Ensure 'DrawerNav' is defined in your navigation stack
                })


            } catch (error) {
                alert('Erro ao tentar entrar: ' + error.message)
            }
        } else {
            alert('Por favor, preencha corretamente os campos!')
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={style.container}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <ImageBackground
                    source={require("../../../assets/fundo.jpg")}
                    style={style.imagem}
                    resizeMode="cover"
                >
                    <View style={style.card}>
                        <Text style={style.label}>Email</Text>
                        <View style={style.inputContainer}>
                            <Ionicons name="person-outline" size={20} color="#587a50" style={style.inputIcon} />
                            <TextInput
                                style={style.input}
                                placeholder="Digite o seu Email"
                                placeholderTextColor="#ddd"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                            />
                        </View>

                        <Text style={style.label}>Senha</Text>
                        <View style={style.inputContainer}>
                            <Ionicons name="lock-closed-outline" size={20} color="#587a50" style={style.inputIcon} />
                            <TextInput
                                style={style.input}
                                placeholder="Digite sua senha"
                                placeholderTextColor="#ddd"
                                secureTextEntry
                                value={senha}
                                onChangeText={setSenha}
                            />
                        </View>

                        <TouchableOpacity style={style.botao} onPress={() => logarUsuario(email, senha)}>
                            <Text style={style.botaoTexto}>Log In</Text>
                            <Ionicons name="arrow-forward-outline" size={20} color="#fff" />
                        </TouchableOpacity>

                        <TouchableOpacity style={style.botao} onPress={() => navigation.navigate('Cadastro')}>
                            <Text style={style.botaoTexto}>Cadastre-se</Text>
                            <Ionicons name="arrow-forward-outline" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );

}
