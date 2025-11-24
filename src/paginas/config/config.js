
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from './configstyle.js';

export default function Config() {
  const navigation = useNavigation();

  const deslogar = async () => {
    try {
      await AsyncStorage.removeItem('tokenSessao');
      console.log('Sessão removida com sucesso!');
      navigation.navigate('login');
    } catch (error) {
      console.log('Erro ao remover o token: ', error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainContainer}>

        <TouchableOpacity style={styles.header} onPress={() => navigation.navigate('perfil')}>

        <Text style={styles.title}>Configurações</Text>

          <Icon name='chevron-back'  size={25} color="#3a713e"   />   </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={(() => navigation.navigate('Perfilam'))}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={(() => navigation.navigate('SobreNos'))}>
          <Text style={styles.buttonText}>Sobre nós</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={(() => navigation.navigate('Contato'))}>
          <Text style={styles.buttonText}>Fale Conosco</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={(() => navigation.navigate('termos'))}>
          <Text style={styles.buttonText}>Termos de Uso</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}onPress={(() => navigation.navigate('privacidade'))}>
          <Text style={styles.buttonText}>Política de Privacidade</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={deslogar}>
          <Icon name="exit-outline" size={25} color="#3a713e" />
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Versão do App: 1.3.7</Text>
          <Text style={styles.infoText}>ID do Usuário: #189203</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

