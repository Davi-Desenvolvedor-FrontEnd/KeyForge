import { TextInput, View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import useStorage from "../../hooks/useStorage";
import * as Clipboard from "expo-clipboard";
export default function SavePassword() {
  const { saveItem, getItem, removeItem } = useStorage();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleCopyPassword = async () => {
    await Clipboard.setStringAsync(password);
  };

  const handleSavePassword = async () => {
    if (!password) return;
    try {
      await saveItem("@pass", password, name);
      setName("");
    } catch (error) {
      console.log("Error saving password:", error);
    }
  };

  return (
      <View style={styles.container}>
        <View style={styles.box}>
          <TextInput
            style={styles.input}
            placeholder="sua senha"
            placeholderTextColor={'#666'}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="nome da senha"
            placeholderTextColor={'#666'}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <View style={styles.buttonArea}>
            <Pressable
              style={styles.buttonSave}
              onPress={() => handleSavePassword()}
            >
              <Text style={styles.textButtonSave}>Salvar senha</Text>
            </Pressable>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "80%",
    minHeight: 230,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 20,
    elevation: 5,
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#010101",
  },
  passwordArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: "90%",
  },
  passwordText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    marginTop: 10,
  },
  textButtonGoBack: {
    fontSize: 12,
    color: "#392DE9",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  buttonSave: {
    backgroundColor: "#392DE9",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    width: "100%",
  },
  textButtonSave: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: "90%",
  },
});
