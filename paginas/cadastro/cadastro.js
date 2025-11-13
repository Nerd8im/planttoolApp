import React from 'react'
import { cadastrarUsuario } from '../../servicos/cadastro.js'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import style from './estiloCadastro.js'

export default function Cadastro({ navigation }) {
  const [senha, setSenha] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [nome, setNome] = React.useState('')
  const [sobrenome, setSobrenome] = React.useState('')

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
              <Ionicons name="mail-outline" size={20} color="#fff" style={style.inputIcon} />
              <TextInput
                style={style.input}
                placeholder="Digite o seu Email"
                placeholderTextColor="#ddd"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
            </View>

            <Text style={style.label}>Nome</Text>
            <View style={style.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#fff" style={style.inputIcon} />
              <TextInput
                style={style.input}
                placeholder="Digite o seu Nome"
                placeholderTextColor="#ddd"
                value={nome}
                onChangeText={setNome}
              />
            </View>

            <Text style={style.label}>Sobrenome</Text>
            <View style={style.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#fff" style={style.inputIcon} />
              <TextInput
                style={style.input}
                placeholder="Digite o seu sobrenome"
                placeholderTextColor="#ddd"
                value={sobrenome}
                onChangeText={setSobrenome}
              />
            </View>

            <Text style={style.label}>Senha</Text>
            <View style={style.inputContainer}>
              <Ionicons name="lock-closed-outline" size={20} color="#fff" style={style.inputIcon} />
              <TextInput
                style={style.input}
                placeholder="Digite sua senha"
                placeholderTextColor="#ddd"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
              />
            </View>

            <TouchableOpacity style={style.botao} onPress={() => cadastrarUsuario(senha, email, nome, sobrenome, navigation)}>
              <Text style={style.botaoTexto}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.botao} onPress={() => navigation.navigate('Login')}>
              <Text style={style.botaoTexto}>Voltar para o Login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
