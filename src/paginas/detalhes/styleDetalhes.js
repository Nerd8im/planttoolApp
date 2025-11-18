import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2efd5',
  },
  card: {
    backgroundColor: '#f2f9e8',
    borderRadius: 20,
    margin: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
  },
  nome: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3a713e',
  },
  nomeCientifico: {
    fontSize: 16,
    color: '#5d8c57',
    marginBottom: 10,
  },
  imagem: {
    width: 180,
    height: 180,
  },
  etiqueta: {
    backgroundColor: '#c7e4b5',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginVertical: 10,
  },
  etiquetaTexto: {
    color: '#3a713e',
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 14,
    textAlign: 'center',
    color: '#4a7040',
    marginVertical: 10,
  },
  secao: {
    width: '100%',
    marginTop: 15,
    backgroundColor: '#e8f3d9',
    borderRadius: 10,
    padding: 15,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#3a713e',
    marginBottom: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  itemTexto: {
    marginLeft: 8,
    fontSize: 14,
    color: '#4a7040',
  },
  botaoGuia: {
    backgroundColor: '#3a713e',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginTop: 20,
  },
  textoBotaoGuia: {
    color: '#fff',
    fontWeight: 'bold',
  },
  botaoSalvar: {
    marginTop: 10,
    backgroundColor: '#c7e4b5',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  textoBotaoSalvar: {
    color: '#3a713e',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#c7e4b5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
})