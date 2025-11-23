import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f7f9fc",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 25,
    borderWidth: 3,
    borderColor: "#4c8bf5",
  },
  campoContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontWeight: "600",
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  valor: {
    fontSize: 16,
    padding: 12,
    backgroundColor: "#e9eef2",
    borderRadius: 10,
    color: "#222",
  },
  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 15,
  },
  button: {
    width: "100%",
    padding: 14,
    marginTop: 25,
    backgroundColor: "#4c8bf5",
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },
});