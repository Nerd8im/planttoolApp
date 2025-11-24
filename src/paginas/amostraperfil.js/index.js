
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './sytle.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';   


export default function Perfilam() {
    const navigation = useNavigation();
const usuario = {
avatar: 'https://static.vecteezy.com/system/resources/previews/013/042/571/original/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg',
nome: 'Usuário Exemplo',
email: 'exemplo@email.com',
};


return (
<ScrollView contentContainerStyle={styles.container}>
<View style={styles.header}>
<Image source={{ uri: usuario.avatar }} style={styles.avatar} />
<Text style={styles.nome}>{usuario.nome}</Text>
</View>
<Text style={styles.nome}>{usuario.email}</Text>

<TouchableOpacity style={styles.botaoSalvar}>
<Text style={styles.txtBotao}>Salvar Alterações</Text>
</TouchableOpacity>

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

</ScrollView>
);
}