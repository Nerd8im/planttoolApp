import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
   // width: 1000,
    height: 890,
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
    backgroundColor: "#dde8cf", 
    borderRadius: 30,
    borderColor: '#fff',
    padding: 20,
    width: 460,
    height: 600,
    position: 'absolute',
    bottom: 0, 
    zIndex: 1,
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
  marginTop: 10, // Reduza esse valor para aproximar do input acima
},
inputContainer: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#88c679",
  borderRadius: 10,
  paddingHorizontal: 10,
  width: "90%", // ou 100%, como preferir
  height: 45,
  marginTop: 5, // Pode ser 2 ou até 0 se quiser bem colado ao label
  alignSelf: "center",
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
  backgroundColor: "#508244",
  marginTop: 15, // Diminua esse valor para aproximar do input acima
  width: "90%",
  height: 45,
  borderRadius: 10,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  alignSelf: "center",
},
  botaoTexto: {
    color: "#dde8cf",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
});
