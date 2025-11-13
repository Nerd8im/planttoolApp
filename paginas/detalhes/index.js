import React from 'react'

import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styleDetalhes.js'
import { useRoute } from "@react-navigation/native";
import  Listaplana  from '../../componentes/lista/index.js'

export default function Detalhes({ route, navigation }) {
const [ plantas, setPlantas] = React.useState([])

  React.useEffect(() => {
    fetch(`${process.env.EXPO_PUBLIC_API_ROTA}/especies`)
      .then(res => res.json())
      .then(json => {
        console.log('🔍 Dados recebidos da API:', json)
        setPlantas(json)
      })
      .catch(err => console.error('Erro ao buscar espécies:', err))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.nome}>{{plantaEspecie_nome}}</Text>

          <Image
            source={{ uri:plantaEspecie_foto }}
            style={styles.imagem}
            resizeMode="contain"
          />

          <View style={styles.etiqueta}>
            <Text style={styles.etiquetaTexto}>Comestível</Text>
          </View>

          <Text style={styles.descricao}>
            {plantaEspecie_descricao}
          </Text>

          <View style={styles.secao}>
            <Text style={styles.subtitulo}>Por que esta planta?</Text>


            <View style={styles.item}>
              <Icon name="water-outline" size={18} color="#3a713e" />
              <Text style={styles.itemTexto}>Rega:{plantaEspecie_intervalo_rega_horas}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.botaoSalvar}>
            <Text style={styles.textoBotaoSalvar}>Salvar para a Lista </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="home-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="person-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
