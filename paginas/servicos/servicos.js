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
        <Text style={styles.title}>Serviços</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>O que oferecemos?</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Texto em produção</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Nossos principais serviços</Text>
        </View>
          <View style={styles.plantCard}>
            <View style={styles.imageCircle}>
              <Image
                source={require('../../../assets/tomatoe.jpg')} // coloque sua imagem aqui
                style={styles.plantImage}
              /> 
             <Text style={styles.infoText}>Texto em produção</Text>
            </View>
</View>

      </ScrollView>
    </SafeAreaView>
  );
}