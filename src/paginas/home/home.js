import React, { useEffect, useState } from 'react'
import Listaplana from '../../componentes/lista/index.js'
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './style.js'

export default function TelaPrincipal() {
  const navigation = useNavigation()
  const [plantas, setPlantas] = useState([])
  const categorias = ['Tudo', 'Frutas', 'Legumes', 'Verduras', 'Comestíveis', 'Trepadeiras']

  useEffect(() => {
    const fetchPlantas = async () => {
      try {
  
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_ROTA}/especies`)
        const especies = await response.json()


    fetchPlantas()
    
        setPlantas(especies)
      } catch (error) {
        console.error('Erro ao buscar plantas:', error)
      }
    }

    fetchPlantas()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar por plantas"
          placeholderTextColor="#ffffffff"
          style={styles.searchInput}
        />
        <Icon name="search" size={20} color="#ffffffff" style={styles.searchIcon} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryMenu}>
        {categorias.map((item, index) => (
          <Text
            key={index}
            style={[styles.categoryItem, index === 0 && styles.selectedCategory]}
          >
            {item}
          </Text>
        ))}
      </ScrollView>

      <FlatList
        data={plantas}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'center' }}
        keyExtractor={(item, index) => (item?.id ? item.id.toString() : index.toString())}
        renderItem={({ item }) => (
          <Listaplana
            plantaEspecie_nome={item.plantaEspecie_nome}
            plantaEspecie_intervalo_rega_horas={item.plantaEspecie_intervalo_rega_horas}
            imagem={"https://tse1.mm.bing.net/th/id/OIP.OdF0hX9bHRoTPKzYPdXWmAHaHa?pid=Api&P=0&h=180"}
            plantaEspecie_descricao={item.plantaEspecie_descricao}
            plantaEspecie_cuidados={item.plantaEspecie_cuidados}
          />
        )}
      />

      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Recomendação de plantas</Text>
        <Image
          source={require('../../../assets/plant-icon.png')}
          style={styles.cardImage}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Icon name="leaf-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="home-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Icon name="person-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('Assistente')}>
        <Icon name="chatbubble-ellipses-outline" size={30} color="#3a713e" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}