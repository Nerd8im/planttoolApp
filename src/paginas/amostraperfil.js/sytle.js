import { StyleSheet } from 'react-native';

export default StyleSheet.create({
container: {
flexGrow: 1,
backgroundColor: '#f4f4f4',
alignItems: 'center',
paddingVertical: 20,
},
header: {
alignItems: 'center',
marginBottom: 25,
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
nome: {
fontSize: 22,
fontWeight: 'bold',
color: '#333',
},
card: {
width: '90%',
backgroundColor: '#fff',
padding: 20,
borderRadius: 12,
elevation: 3,
},
label: {
fontSize: 14,
color: '#555',
marginTop: 10,
},
input: {
backgroundColor: '#eaeaea',
padding: 10,
borderRadius: 8,
marginTop: 5,
},
botaoSalvar: {
marginTop: 20,
backgroundColor: '#4CAF50',
paddingVertical: 12,
paddingHorizontal: 30,
borderRadius: 10,
},
txtBotao: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
}
});