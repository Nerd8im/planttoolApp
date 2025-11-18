import { Dimensions, StyleSheet } from "react-native";

const largura = Dimensions.get('window').width / 2.3;

const styles = StyleSheet.create({
  
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#2e7d32",  // verde bonito
    padding: 10,
    alignItems: "center",
    margin: 8,
    width: largura,
    elevation: 5, // sombra no Android
    shadowColor: "#000", // sombra no iOS
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },

  movieImage: {
    width: 130,
    height: 150,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#4caf50",  // moldura da imagem
    marginBottom: 6,
  },

  movieText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1b5e20",
    textAlign: "center",
  },
});

export default styles;
