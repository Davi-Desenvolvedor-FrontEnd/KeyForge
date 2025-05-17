import Slider from "@react-native-community/slider";
import { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ModalPassword from "../../components/modal";
import { Divider } from "react-native-paper";
import { estilos } from "../../global_styles/styles";
let charset =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
export default function GereratorPassword() {
  const [size, setSize] = useState(6);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setSize(size);
  }, []);
  function generatePassword() {
    let password = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    setPasswordValue(password);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.logo}
      />
      <View style={styles.sliderBox}>
        <Text style={styles.title}>{size} Caracteres</Text>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="red"
          minimumTrackTintColor="blue"
          thumbTintColor="blue"
          value={size}
          onValueChange={(value) => setSize(Number(value.toFixed(0)))}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.textButton}>Gerar senha</Text>
      </TouchableOpacity>
      <ModalPassword
        visible={modalVisible}
        password={passwordValue}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    color: "#392DE9",
    textAlign: "center",
  },
  sliderBox: {
    width: "80%",
    justifyContent: "center",
    padding: 8,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#392DE9",
    width: "80%",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 16,
  },
});
