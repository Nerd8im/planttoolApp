import React from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styleDetalhes.js';

export default function Detalhes({ route, navigation }) {

 
  const {
    plantaEspecie_nome,
    plantaEspecie_descricao,
    plantaEspecie_cuidados,
    plantaEspecie_intervalo_rega_horas,
    imagem
  } = route.params || {};

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View>

          <Text style={styles.nome}>{plantaEspecie_nome}</Text>

          <Image
            source={{ uri: imagem }}
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
            <Text style={styles.subtitulo}>Sobre</Text>

            <View style={styles.item}>
              <Icon name="water-outline" size={18} color="#3a713e" />
              <Text style={styles.itemTexto}>
                Rega: {plantaEspecie_intervalo_rega_horas} horas
              </Text>
            </View>

            {plantaEspecie_cuidados && (
              <View style={styles.item}>
                <Icon name="leaf-outline" size={18} color="#3a713e" />
                <Text style={styles.itemTexto}>{plantaEspecie_cuidados}</Text>
              </View>
            )}

          </View>

          <TouchableOpacity style={styles.botaoSalvar}>
            <Text style={styles.textoBotaoSalvar}>Salvar para a Lista</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon name="home-outline" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
          <Icon name="person-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}
