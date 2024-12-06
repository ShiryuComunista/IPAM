import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 8,
    backgroundColor: '#ffff',
    borderRadius: 8
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  button: {
    backgroundColor: "#15b653",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonDisabled: {
    backgroundColor: "#aaa",
  },
});

export default styles;
