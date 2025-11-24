import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingBottom: 120,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    paddingVertical: 20,
  },

  header: {
    alignItems: 'center',
    marginBottom: 25,
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: '#7fbf7f',
    marginBottom: 10,
  },

  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d4d2d',
    marginBottom: 2,
  },

  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },

  card: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    marginBottom: 20,
  },

  label: {
    fontSize: 15,
    color: '#333',
    marginTop: 15,
    marginBottom: 5,
    fontWeight: '500',
  },

  input: {
    backgroundColor: '#e9f3e6',
    padding: 12,
    borderRadius: 12,
    fontSize: 15,
  },

  botaoSalvar: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    elevation: 4,
    marginBottom: 40,
  },

  txtBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
    headerTop: {
    backgroundColor: '#6B8E63',
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 30,
    alignSelf: 'flex-start',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#c7e4b5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
