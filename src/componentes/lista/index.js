import { Text, TouchableOpacity, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./stilo.js";

export default function Listaplana({
  plantaEspecie_nome,
  plantaEspecie_descricao,
  plantaEspecie_cuidados,
  plantaEspecie_intervalo_rega_horas,
  imagem
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
        imagem
      })}
    >

      <Image
        source={{ uri: imagem }}
        style={styles.movieImage}
      />

      <Text style={styles.movieText}>
        {plantaEspecie_nome}
      </Text>

    </TouchableOpacity>
  );
}
