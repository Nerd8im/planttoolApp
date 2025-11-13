import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native';
import styles from './sevicosstyle.js';
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {
  const navigation = useNavigation();

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
              source={require('../../../assets/tomatoe.jpg')}  
              style={styles.plantImage}
            />
            <Text style={styles.infoText}>Sugestões Personalizadas</Text>
          </View>
        </View>

        <View style={styles.plantCard}>
          <View style={styles.imageCircle}>
            <Image
              source={require('../../../assets/tomatoe.jpg')} 
              style={styles.plantImage}
            />
            <Text style={styles.infoText}>Guias e Tutoriais</Text>
          </View>
        </View>

        <View style={styles.plantCard}>
          <View style={styles.imageCircle}>
            <Image
              source={require('../../../assets/tomatoe.jpg')} 
              style={styles.plantImage}
            />
            <Text style={styles.infoText}>Consultoria com IA</Text>
          </View>
        </View>

        <View style={styles.plantCard}>
          <View style={styles.imageCircle}>
            <Image
              source={require('../../../assets/tomatoe.jpg')} 
              style={styles.plantImage}
            />
            <Text style={styles.infoText}>Ferramentas de Planejamento</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
