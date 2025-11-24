import { Text, TouchableOpacity, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./stilo.js";

export default function Listaplana({
  plantaEspecie_nome,
  plantaEspecie_descricao,
  plantaEspecie_cuidados,
  plantaEspecie_intervalo_rega_horas,

}) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Detalhes', {
        plantaEspecie_nome,
        plantaEspecie_descricao,
        plantaEspecie_cuidados,
        plantaEspecie_intervalo_rega_horas,
       
      })}
    >

      <Image
        source={{ uri: "https://tse1.mm.bing.net/th/id/OIP.OdF0hX9bHRoTPKzYPdXWmAHaHa?pid=Api&P=0&h=180" }}
        style={styles.movieImage}
      />

      <Text style={styles.movieText}>
        {plantaEspecie_nome}
      </Text>

    </TouchableOpacity>
  );
}
