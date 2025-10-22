import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F4E6',  // Soft green background similar to the image
  },
  mainContainer: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3A5A40',  // Dark green title
    marginBottom: 15,
  },
  infoContainer: {
    marginBottom: 15,
  },
  infoText: {
    fontSize: 18,
    color: '#3A5A40',  // Consistent text color
  },
  plantCard: {
    backgroundColor: '#FFF',  // White background for each card
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,  // Add shadow effect
  },
  imageCircle: {
    alignItems: 'center',
    marginBottom: 10,
  },
  plantImage: {
    width: 60,
    height: 60,
    borderRadius: 30,  // Circular images
  },
});
