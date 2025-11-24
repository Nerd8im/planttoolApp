import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style.js'

export default function privacidade() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.header}>
          <Icon name="arrow-back" size={28} color="#3A5A40"  onPress={() => navigation.navigate('config')}/>
        </View>

        <Text style={styles.title}>Política de Privacidade</Text>
       < Text style={styles.paragraph}>
Esta Política de Privacidade explica como suas informações são coletadas, utilizadas e protegidas.
        </Text>

        <Text style={styles.subtitle}>Coleta de Informações</Text>
        <Text style={styles.paragraph}>
Podemos coletar informações fornecidas diretamente pelo usuário
 durante o cadastro e uso do aplicativo, como nome, e‑mail, foto e dados relacionados às funcionalidades 
 internas da plataforma.Também podemos coletar dados técnicos, como modelo do dispositivo, sistema
  operacional e informações de uso, apenas para melhoria do desempenho e funcionamento.
        </Text>

        <View style={styles.sectionContainer}>

                                  <View style={styles.section}>
            <Text style={styles.sectionTitle}>Uso das Informações</Text>
            <Text style={styles.paragraph}>
As informações são utilizadas para:
Identificar o usuário dentro do aplicativo.
Melhorar a experiência e personalizar funcionalidades.
Garantir segurança e prevenir uso indevido.
Realizar análises internas para aprimoramento do serviço.
Jamais vendemos ou compartilhamos informações pessoais para fins comerciais.
            </Text>
          </View>

                      <View style={styles.section}>
            <Text style={styles.sectionTitle}>Armazenamento e Segurança</Text>
            <Text style={styles.paragraph}>
Os dados são armazenados em servidores seguros. Adotamos práticas de segurança para proteger as informações,
 mas nenhum sistema é totalmente invulnerável. O usuário também é responsável por proteger seus dados de login.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Compartilhamento de Dados</Text>
            <Text style={styles.paragraph}>
Informações só serão compartilhadas em situações legais obrigatórias (ordens judiciais, investigações, etc.)
 ou quando necessário para funcionamento do serviço 
(como servidores ou integrações do próprio aplicativo).
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Direitos do Usuário</Text>
            <Text style={styles.paragraph}>
             O usuário pode solicitar:
Acesso às informações armazenadas.
Correção de dados incorretos.
Exclusão de sua conta e dados, respeitando limitações legais.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Alterações na Política</Text>
            <Text style={styles.paragraph}>
             A política pode ser atualizada quando necessário. Mudanças significativas serão notificadas dentro do aplicativo.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Aceite dos Termos</Text>
            <Text style={styles.paragraph}>
            O uso contínuo do aplicativo após a publicação de atualizações dos termos indica que o usuário concorda com as alterações.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
