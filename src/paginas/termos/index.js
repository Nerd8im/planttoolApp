import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './sytle.js'

export default function termos() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.header}>
          <Icon name="arrow-back" size={28} color="#3A5A40"  onPress={() => navigation.navigate('config')}/>
        </View>

        <Text style={styles.title}>TERMOS DE USO</Text>

        <Text style={styles.subtitle}>Uso do Aplicativo</Text>
        <Text style={styles.paragraph}>
O aplicativo deve ser utilizado apenas para fins permitidos e de acordo com a legislação vigente. Qualquer uso indevido, tentativa de violar sistemas, manipular dados ou prejudicar outros usuários poderá resultar na suspensão ou remoção da conta.
        </Text>

        <View style={styles.sectionContainer}>

                                  <View style={styles.section}>
            <Text style={styles.sectionTitle}>Cadastro e Acesso</Text>
            <Text style={styles.paragraph}>
Para utilizar determinadas funcionalidades, o usuário poderá precisar criar uma conta. As informações fornecidas devem ser verdadeiras e atualizadas. O usuário é responsável por manter a segurança de seu login e senha.
            </Text>
          </View>

                      <View style={styles.section}>
            <Text style={styles.sectionTitle}>Conteúdo e Informações</Text>
            <Text style={styles.paragraph}>
As informações exibidas no aplicativo são fornecidas pelo próprio usuário ou geradas pelo sistema. O aplicativo não se responsabiliza por dados inseridos incorretamente ou por interpretações erradas desses dados.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Modificações no Serviço</Text>
            <Text style={styles.paragraph}>
O aplicativo poderá ser atualizado, modificado ou ter funções removidas a qualquer momento, visando aprimoramento do serviço.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Responsabilidades do Usuário</Text>
            <Text style={styles.paragraph}>
             O usuário se compromete a:

Não utilizar o aplicativo para fins ilícitos.

Não tentar danificar, hackear ou interferir no sistema.

Respeitar os outros usuários e suas informações.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Limitação de Responsabilidade</Text>
            <Text style={styles.paragraph}>
             O aplicativo não é responsável por perdas, danos ou prejuízos causados pelo uso inadequado da plataforma, falhas externas ou indisponibilidades temporárias.
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
