import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8F3', // Light green background
    padding: 15,
  },
  mainContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  logoutButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: '#F4F8F3',
  },
  infoContainer: {
    marginTop: 30,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    marginTop: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#6a6a6a',
    textAlign: 'center',
    marginVertical: 5,
  },
});
