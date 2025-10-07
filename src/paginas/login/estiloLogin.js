import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagem: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#dde8cf", // Roxo translúcido
    borderRadius: 30,
    borderColor: '#fff',
    padding: 20,
    width: 460,
    height: 600,
    position: 'absolute',
    bottom: 0, // Fixa o componente na parte inferior
    zIndex: 1,
    justifyContent: 'space-between',
    elevation: 10, // sombra no Android
    shadowColor: "#000", // sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  label: {
    color: "#fff",
    alignSelf: "flex-start",
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#88c679",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "100%",
    height: 45,
    marginTop: 5,
  },
  inputIcon: {
    marginRight: 10,

  },
  input: {
    flex: 1,
    color: "#587a50",
    fontSize: 16,
  },
  botao: {
    backgroundColor: "#508244", // verdin do bom 
    marginTop: 20,
    width: "100%",
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  botaoTexto: {
    color: "#dde8cf",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
});
