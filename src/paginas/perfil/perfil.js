import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from './style.js';

export default function Perfil() {
  const navigation = useNavigation();
  const usuario = {
    avatar: 'https://tse1.mm.bing.net/th/id/OIP.SQGH5LCt10dDbl_LTH0PVQHaHa?pid=Api&P=0&h=180',
    nome: 'Usuário Exemplo',
  };

  return (    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
  

      {/* CABEÇALHO */}
      <View style={styles.header}>
<View style={styles.header}>
<Image source={{ uri: usuario.avatar }} style={styles.avatar} />
<Text style={styles.nome}>{usuario.nome}</Text>
</View>
      </View>

      {/* BOTÕES */}
      <View style={styles.mainButtons}>
        <TouchableOpacity
          onPress={() => navigation.navigate('config')}
          style={styles.button}>
          <Text style={styles.buttonText}>Minha conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Minhas plantas</Text>
        </TouchableOpacity>
      </View>

      {/* LISTA DEMONSTRATIVA */}
      <View style={{ flex: 1, width: "100%" }}>
        <Text style={styles.sectionTitle}>
          Minhas Plantas (2)
        </Text>


          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

            {/* CARD 1 */}
            <View style={styles.card}>
              <Image
                source={{ uri: "https://tse1.mm.bing.net/th/id/OIP.-SkXr3yjFKoozxuN7X08LAHaFj?pid=Api&P=0&h=180" }}
                style={styles.image}
              />
              <Text style={styles.nome}>Rosa Vermelha</Text>
              <Text style={styles.info}>Plantada: 10/08/2024</Text>
              <Text style={styles.info}>Última rega: 20/08/2024</Text>
            </View>

            {/* CARD 2 */}
            <View style={styles.card}>
              <Image
                source={{ uri: "https://c.pxhere.com/images/65/b8/4e244dfe51523b07cab99ca8aa02-1664642.jpg!d" }}
                style={styles.image}
              />
              <Text style={styles.nome}>Suculenta Jade</Text>
              <Text style={styles.info}>Plantada: 02/07/2024</Text>
              <Text style={styles.info}>Última rega: 19/08/2024</Text>
            </View>


          </View>
      

        <TouchableOpacity
          onPress={() => navigation.navigate('RegistrarPlanta')}
          style={styles.addButton}>
          <Icon name="add" size={30} color="#3a713e" />
        </TouchableOpacity>
      </View>
    </ScrollView>

      {/* MENU INFERIOR */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Icon name="leaf-outline" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home-outline" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="person-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}



