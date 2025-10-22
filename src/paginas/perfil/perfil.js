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

      <TouchableOpacity style={styles.gearButton} onPress={(() => navigation.navigate('config'))}>
        <Icon name="exit-outline" size={25} color="#3a713e" />
      </TouchableOpacity>


      <View style={styles.header}>
        <View style={styles.avatar}>
          <Icon name="person-outline" size={60} color="#3a713e" />
        </View>
        <Text style={styles.username}>adimin</Text>
      </View>


      <View style={styles.mainButtons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>minha conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>minhas plantas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.plantSection}>
        <Text style={styles.sectionTitle}>Minhas Plantas</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          <View style={styles.plantCard}>
            <View style={styles.imageCircle}>
              <Image
                source={require('../../../assets/tomatoe.jpg')} // coloque sua imagem aqui
                style={styles.plantImage}
              />
            </View>
            <Text style={styles.plantName}>Tomate</Text>

            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>
                Vegetal <Text style={styles.infoValue}>Tipo</Text>
              </Text>
              <Text style={styles.infoText}>
                Berinjela <Text style={styles.infoValue}>Planta</Text>
              </Text>
              <Text style={styles.infoText}>
                Horta <Text style={styles.infoValue}>Local</Text>
              </Text>
              <Text style={styles.infoText}>10 MP</Text>
              <Text style={styles.infoText}>7 PH</Text>
            </View>
          </View>
        </ScrollView>


        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={30} color="#3a713e" />
        </TouchableOpacity>
      </View>


      <View style={styles.footer}>
        <TouchableOpacity>
          <Icon name="leaf-outline" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home-outline" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="person-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
