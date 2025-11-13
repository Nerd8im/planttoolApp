import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imagem: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end", // faz o card ir para baixo
    alignItems: "center",
  },
  card: {
    backgroundColor: "#dde8cf",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    width: "100%",
    height: height * 0.6, // responsivo
    zIndex: 1,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  label: {
    color: "#dde8cf",
    alignSelf: "flex-start",
    marginLeft: 5,
    fontSize: width * 0.035,
    fontWeight: "bold",
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#88c679",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "90%",
    height: height * 0.055,
    marginTop: 5,
    alignSelf: "center",
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#587a50",
    fontSize: width * 0.04,
  },
  botao: {
    backgroundColor: "#508244",
    marginTop: 15,
    width: "90%",
    height: height * 0.055,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
  },
  botaoTexto: {
    color: "#dde8cf",
    fontSize: width * 0.04,
    fontWeight: "bold",
    marginRight: 10,
  },
});
