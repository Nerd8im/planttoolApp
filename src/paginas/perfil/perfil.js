
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Listaplana from '../../componentes/plantas/index.js';
import {useState } from 'react'
import styles from './style.js';

export default function Perfil() {
  const navigation = useNavigation();
  const [plantas, setPlantas] = useState([])
  const deslogar = async () => {
    try {
      await AsyncStorage.removeItem('tokenSessao')
      console.log('Sessão removida com sucesso!')
      navigation.navigate('login')
    } catch (error) {
      console.log('Erro ao remover o token: ', error)
    }
  }

  useState(() => {
  const carregarPlantas = async () => {
    try {
      const token = await AsyncStorage.getItem('tokenSessao')
      const resposta = await fetch(`${process.env.EXPO_PUBLIC_API_ROTA}/especies`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      const dados = await resposta.json()
      setPlantas(dados)
    } catch (error) {
      console.log('Erro ao buscar plantas:', error)
    }
  }

  carregarPlantas()
}, [])


  return (
    <SafeAreaView style={styles.container}>

     
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Icon name="person-outline" size={60} color="#3a713e" />
        </View>
        <Text style={styles.username}>adimin</Text>
      </View>


      <View style={styles.mainButtons}>
        <TouchableOpacity onPress={() => navigation.navigate('config')} style={styles.button}>
          <Text style={styles.buttonText}>minha conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>minhas plantas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.plantSection}>
        <Text style={styles.sectionTitle}>Minhas Plantas</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          <FlatList
  data={plantas}
  numColumns={2}
  columnWrapperStyle={{ justifyContent: 'center' }}
  keyExtractor={(item, index) =>
    item?.planta_id ? item.planta_id.toString() : index.toString()
  }
  renderItem={({ item }) => (
    <Listaplana
      planta_id={item.planta_id}
      userPlanta_nome={item.userPlanta_nome}
      imagem_url={item.imagem_url}
      ultima_rega={item.ultima_rega}
      plantaEspecie_nome={item.plantaEspecie_nome}
    />
  )}
/>

        </ScrollView>


        <TouchableOpacity onPress={() => navigation.navigate('RegistrarPlanta')} style={styles.addButton}>
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
