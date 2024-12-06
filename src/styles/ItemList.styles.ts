import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    marginVertical: 5,
    padding: 10,
    alignItems: "center",
  },
  textContainer: {
    margin: 5,
    flex: 8,
  },
  buttonContainer: {
    flex: 4,
  },
  button: {
    backgroundColor: "#FF0000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  itemText: {
    fontSize: 16,
    flexWrap: "wrap",
  },
});

export default styles;
