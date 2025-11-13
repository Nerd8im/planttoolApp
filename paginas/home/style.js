
import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2efd5',
    paddingHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#5d8c57',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  categoryMenu: {
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 10,
  },
  categoryItem: {
    marginRight: 15,
    fontSize: 14,
    color: '#3a713e',
  },
  selectedCategory: {
    fontWeight: 'bold',
    color: '#000',
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#d8e8c9',
    borderRadius: 10,
    padding: 20,
    marginTop: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3a713e',
  },
  cardImage: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
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
  floatingButton: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: '#cfe9c5',
    borderRadius: 30,
    padding: 10,
    elevation: 5,
  },
})
