import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  picker: {
  flex: 1,
  height: 50, // Altura explícita
  color: '#000', // Cor do texto
  marginLeft: 8, // Ajuste para o ícone
},
inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 8,
  paddingHorizontal: 10,
  marginBottom: 15,
  backgroundColor: '#fff',
  height: 50, // Altura fixa para o container
},

  imagem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: '90%',
    backgroundColor: '#f5f7f2',
    padding: 25,
    borderRadius: 18,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },

  label: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
    marginBottom: 5,
  },
      header: {
    backgroundColor: '#6B8E63',
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 30,
    alignSelf: 'flex-start',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 10,
  },

  inputIcon: {
    marginRight: 8,
  },



  inline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 12,
  },

  inputInline: {
    backgroundColor: '#eee',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
    color: '#333',
  },

  botao: {
    backgroundColor: '#4b7f3b',
    paddingVertical: 12,
    borderRadius: 50,
    marginTop: 20,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

 
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    height: 40, // Ajuste para altura do picker
    backgroundColor: '#eee',
    borderRadius: 50,
    paddingLeft: 10,
  },

  picker: {
    height: 40,
    width: '50%',
    backgroundColor: '#eee',
    borderRadius: 50,
  },

});
