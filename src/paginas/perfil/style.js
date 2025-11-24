import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2efd5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  gearButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'transparent',
    zIndex: 2,
  },

  header: {
    alignItems: 'center',
    marginTop: 50,
  },

  avatar: {
    backgroundColor: '#b8d8a6',
    borderRadius: 100,
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },

  username: {
    backgroundColor: '#3a713e',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 8,
    paddingHorizontal: 25,
    paddingVertical: 4,
    fontSize: 16,
    marginTop: 10,
  },

  mainButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginTop: 25,
  },

  button: {
    backgroundColor: '#c7e4b5',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },

  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2c572c',
  },

  plantSection: {
    backgroundColor: '#d8e8c9',
    width: '90%',
    borderRadius: 20,
    marginTop: 20,
    paddingVertical: 15,
    alignItems: 'center',
  },

  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2f5e2f',
    marginBottom: 10,
    left: 10,
    alignSelf: 'center',
    
  },

  plantCard: {
    backgroundColor: '#ecf5e0',
    borderRadius: 15,
    width: 180,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    elevation: 2,
  },

  imageCircle: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 8,
    elevation: 2,
    marginBottom: 5,
  },

  plantImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  plantName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    marginTop: 5,
  },

  infoContainer: {
    marginTop: 10,
    alignItems: 'center',
  },

  infoText: {
    fontSize: 13,
    color: '#000',
  },

  infoValue: {
    color: '#3a713e',
    fontWeight: 'bold',
  },

  addButton: {
    backgroundColor: '#e2efd5',
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    bottom: 30,
    elevation: 3,
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
avatar: {
width: 120,
height: 120,
borderRadius: 60,
marginBottom: 10,
},
  card: {
    width: 160,
    height: 220,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 15,
    elevation: 4,
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 12,
    backgroundColor: '#ddd',
  },
  nome: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#2f4f2f',
    fontSize: 16,
  },
  info: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
});
