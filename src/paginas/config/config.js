import React, { useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from './style.js';

export default function Perfil() {
  const navigation = useNavigation();

  const deslogar = async () => {
    try {
      await AsyncStorage.removeItem('tokenSessao')
      console.log('Sessão removida com sucesso!')
      navigation.navigate('login')
    } catch (error) {
      console.log('Erro ao remover o token: ', error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity style={styles.gearButton} onPress={(deslogar)}>
        <Icon name="exit-outline" size={25} color="#3a713e" />
      </TouchableOpacity>


      <View style={styles.header}>
        <View style={styles.avatar}>

        </View>
        <Text style={styles.username}>Editar Perfil</Text>
      </View>


      <View style={styles.mainButtons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Conectado com...</Text>
        </TouchableOpacity>
      </View>

        
              <Text style={styles.infoText}>10 MP</Text>
              <Text style={styles.infoText}>7 PH</Text>
  






    </SafeAreaView>
  );
}
