import { Dimensions, StyleSheet } from "react-native";
const largura = Dimensions.get('window').width / 2


const styles = StyleSheet.create ({
  butao: {
    pandingTop: 2,
    paddingBottom: 1, 
    paddingRight: 8,
    paddingLeft: 8, 
    alignItems: "center", 
    width: largura,
    height: 'auto'
  },

    movieItem: {
        flex: 1,
        alignItems: "center", 
        margin: 1,
        backgroundColor: "Gray", 
        borderRadius: 1, 
        padding: 1,
      },
      movieImage: {
        width: 150, 
        height: 190,
        borderRadius: 1,
        marginBottom: 1, 
      },
      movieText: {
        fontSize: 10,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
      },

})

export default styles;