import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  Header: {
    backgroundColor: "#392DE9",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  Title: {
    fontSize: 38,
    fontWeight: "800",
    color: "#fff",
    textAlign: "center",
  },
  Text: {
    fontSize: 20,
    color: "#E8E8E8",
    textAlign: "center",
    fontWeight: "500",
  },
  Label: {
    fontSize: 19,
    color: "#000",
    fontWeight: "500",
    textAlign: "left",
    marginBottom: 10,
  },
  Input: {
    width: "100%",
    height: 40,
    borderWidth: 0,
    borderColor: "#000",
    backgroundColor: "#ddd",
    color: "#000",
    elevation: 5,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 25
  },
  ButtonRouter: {
    width: "80%",
    alignSelf: "center",
    height: 45,
    borderWidth: 0,
    borderColor: "#000",
    backgroundColor: "#1c1c1c",
    color: "#000",
    elevation: 5,
    borderRadius: 10,
    paddingLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  }
});
