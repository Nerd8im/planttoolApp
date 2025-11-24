import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './sytle.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Perfilam() {
  const navigation = useNavigation();

  const usuario = {
    avatar: 'https://tse1.mm.bing.net/th/id/OIP.SQGH5LCt10dDbl_LTH0PVQHaHa?pid=Api&P=0&h=180',
    nome: 'Usuário Exemplo',
    email: 'exemplo@email.com',
  };

  return (
    <View style={{ flex: 1 }}>
  
      <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.headerTop}>
                  <Icon name="arrow-back" size={28} color="#3A5A40"  onPress={() => navigation.navigate('config')}/>
                </View>
        

        <View style={styles.header}>
          <Image source={{ uri: usuario.avatar }} style={styles.avatar} />
          <Text style={styles.nome}>{usuario.nome}</Text>
          <Text style={styles.email}>{usuario.email}</Text>
        </View>

        {/* CARD */}
        <View style={styles.card}>
          <Text style={styles.label}>Nome</Text>
          <TextInput style={styles.input} placeholder="Alterar nome..." />

          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="Alterar email..." />

          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input} placeholder="Alterar senha..." secureTextEntry />
        </View>

        <TouchableOpacity style={styles.botaoSalvar}>
          <Text style={styles.txtBotao}>Salvar Alterações</Text>
        </TouchableOpacity>

      </ScrollView>



    </View>
  );
}
