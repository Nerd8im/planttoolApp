import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style.js';

export default function SobreNos() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.header}>
          <Icon name="megaphone-outline" size={28} color="#3A5A40" />
        </View>

        <Text style={styles.title}>Sobre Nós</Text>

        <Text style={styles.subtitle}>Quem somos?</Text>
        <Text style={styles.paragraph}>
          Meu nome é Yoshikage Kira. Tenho 33 anos. Minha casa fica na parte nordeste de Morioh, 
          onde todas as casas estão, e eu não sou casado. Eu trabalho como funcionário das lojas de 
          departamentos Kame Yu e chego em casa todos os dias às oito da noite, no máximo. 
          Eu não fumo, mas ocasionalmente bebo. Estou na cama às 23 horas e me certifico de ter 
          oito horas de sono, não importa o que aconteça. Depois de tomar um copo de leite morno 
          e fazer cerca de vinte minutos de alongamentos antes de ir para a cama, geralmente não 
          tenho problemas para dormir até de manhã. Assim como um bebê, eu acordo sem nenhum 
          cansaço ou estresse pela manhã.
        </Text>

        <View style={styles.sectionContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Nossa Missão</Text>
            <Text style={styles.paragraph}>
              faltar hoje, faltar amanhã, falta a semana toda, falta o mês todo, falta o ano inteiro e trancar o curso
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Nossa Visão</Text>
            <Text style={styles.paragraph}>
              nossa visão está enganando a gente fazendo-os pensar que está mais torto que a coluna do gabs
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Nossa Equipe</Text>
            <Text style={styles.paragraph}>
              nois, uma coxinha em um guaraná
            </Text>
          </View>
        </View>

        <View style={styles.valuesContainer}>
          <Text style={styles.valueItem}>🌿 Sustentabilidade</Text>
          <Text style={styles.valueItem}>🍃 Inovação</Text>
          <Text style={styles.valueItem}>🌼 Simplicidade</Text>
          <Text style={styles.valueItem}>🌱 Comunidade</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
