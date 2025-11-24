/**import { Text, TouchableOpacity, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./sytle.js";

export default function Listaplana({
  planta_id, 
  nome_plantUsuario, 
  imagem_url, 
  intervalo_rega, 
  plantaEspecie_nome 
}) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('DetalhesPlantaUsuario', {
        planta_id,
        nome_plantUsuario,
        imagem_url,
        intervalo_rega,
        plantaEspecie_nome
      })}
    >

      <Text style={styles.movieText}>
        {nome_plantUsuario}
      </Text>

      <Text style={styles.subText}>
        {plantaEspecie_nome}
      </Text>

      <Text style={styles.subText}>
        Rega: a cada {intervalo_rega}h
      </Text>

    </TouchableOpacity>
  );
}
*/