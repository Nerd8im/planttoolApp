import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F4E6',  
  },
  mainContainer: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3A5A40',
    marginBottom: 15,
  },
  contactDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 18,
    color: '#3A5A40',
    marginLeft: 10,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A5A40',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#3A5A40',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 16,
    color: '#3A5A40',
  },
  messageInput: {
    height: 120,
    textAlignVertical: 'top', 
  },
  button: {
    backgroundColor: '#3A5A40',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  contactLogoContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  contactLogo: {
    width: 200,
    height: 50,  
    resizeMode: 'contain',
  },
});
