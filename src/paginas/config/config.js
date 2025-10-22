import React, { useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from './configstyle.js';

export default function Perfil() {
  const navigation = useNavigation();

  const deslogar = async () => {
    try {
      await AsyncStorage.removeItem('tokenSessao');
      console.log('Sessão removida com sucesso!');
      navigation.navigate('login');
    } catch (error) {
      console.log('Erro ao remover o token: ', error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <Text style={styles.title}>Configurações</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Alterar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Conectado com...</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Conta Privada</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Atividade Online</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Fale Conosco</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Central de Ajuda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Denunciar um Problema</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Termos de Uso</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Política de Privacidade</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={deslogar}>
          <Icon name="exit-outline" size={25} color="#3a713e" />
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Versão do App: 1.3.7</Text>
          <Text style={styles.infoText}>ID do Usuário: #189203</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

