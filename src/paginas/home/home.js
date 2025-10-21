import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons' 
import styles from './style.js'

export default function TelaPrincipal() {
  const navigation = useNavigation()

  const categorias = ['Tudo', 'Frutas', 'Legumes', 'Verduras', 'Comestíveis', 'Trepadeiras']

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="buscar por plantas"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
        <Icon name="search" size={20} color="#444" style={styles.searchIcon} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryMenu}>
        {categorias.map((item, index) => (
          <Text key={index} style={[styles.categoryItem, index === 0 && styles.selectedCategory]}>
            {item}
          </Text>
        ))}
      </ScrollView>

    
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


      <TouchableOpacity style={styles.floatingButton}>
        <Icon name="chatbubble-ellipses-outline" size={30} color="#3a713e" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

