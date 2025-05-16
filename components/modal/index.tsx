import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import useStorage from "../../hooks/useStorage";
import { useState } from "react";
export default function ModalPassword({ visible, password, onClose }) {
  const { saveItem, getItem, removeItem } = useStorage();
  const [name, setName] = useState("");

  const handleCopyPassword = async () => {
    await Clipboard.setStringAsync(password);
  };

  const handleSavePassword = async () => {
    if (!password) return;
    try {
      await saveItem("@pass", password, name);
      setName("");
      onClose();
    } catch (error) {
      console.log("Error saving password:", error);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Senha gerada</Text>
          <TextInput
            style={styles.input}
            placeholder="nome da senha"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <View style={styles.passwordArea}>
            <Text style={styles.passwordText}>{password}</Text>
            <Feather
              onPress={() => handleCopyPassword()}
              name="copy"
              size={24}
              color="white"
            />
          </View>
          <View style={styles.buttonArea}>
            <Pressable onPress={() => onClose()}>
              <Text style={styles.textButtonGoBack}>Voltar</Text>
            </Pressable>
            <Pressable
              style={styles.buttonSave}
              onPress={() => handleSavePassword()}
            >
              <Text style={styles.textButtonSave}>Salvar senha</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
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
