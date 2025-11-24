import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A8C3A0', // fundo verde claro
  },
  mainContainer: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 10,
  },
  header: {
    backgroundColor: '#6B8E63',
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 30,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2F4F2F',
    marginTop: 15,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2F4F2F',
    marginTop: 10,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 14,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 15,
  },
  sectionContainer: {
    marginTop: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2F4F2F',
    marginBottom: 5,
  },
  valuesContainer: {
    borderTopWidth: 1,
    borderTopColor: '#C8DCC0',
    paddingTop: 10,
  },
  valueItem: {
    fontSize: 15,
    color: '#2F4F2F',
    marginVertical: 3,
    fontWeight: '600',
  },
});
