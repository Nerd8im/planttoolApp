import { Text, TextInput,TouchableOpacity, View, FlatList, Image } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import styles from "./stilo.js";


export default function Listaplana({plantaEspecie_nome, plantaEspecie_descricao, plantaEspecie_cuidados, plantaEspecie_intervalo_rega_horas}) {

    const navigation = useNavigation();

    return (

      <TouchableOpacity style={styles.butao} onPress = {() => navigation.navigate('Detalhes', {plantaEspecie_nome, plantaEspecie_descricao, plantaEspecie_cuidados, plantaEspecie_intervalo_rega_horas})}>
      <Image source={{}} style={styles.movieImage} />
      <Text style={styles.movieText}>{titulo} - Nota: {nota}</Text>
    </TouchableOpacity>

    );


}