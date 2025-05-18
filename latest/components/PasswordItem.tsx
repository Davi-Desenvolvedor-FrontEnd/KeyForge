import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import * as Clipboard from "expo-clipboard";
type PasswordItemProps = {
  password: string;
  removePassword: () => void;
  name?: string;
};

export default function PasswordItem({ password, removePassword, name }: PasswordItemProps) {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const makkeShowPassword = () => {
    if (!password) return ""; // Retorna vazio se password for undefined/null
    return "*".repeat(password.length);
  };
  const handleCopyPassword = async () => {
    await Clipboard.setStringAsync(password);
  };
  return (
    <View style={styles.boxPassword}>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.name}>{name ? name : "Sem nome"}</Text>
        <AntDesign
          name="delete"
          size={24}
          color="white"
          onPress={() => removePassword()}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text style={styles.password}>
            {showPassword ? password : makkeShowPassword()}
          </Text>
          <Feather
            onPress={() => handleCopyPassword()}
            name="copy"
            size={24}
            color="white"
          />
        </View>
        <Ionicons
          name={showPassword ? "eye" : "eye-off"}
          size={20}
          color={"white"}
          onPress={() => {
            toggleShowPassword();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxPassword: {
    backgroundColor: "black",
    borderRadius: 10,
    width: "100%",
    gap: 10,
    padding: 9,
    marginHorizontal: "auto",
    marginBottom: 10,
    minHeight: 90,
    justifyContent: "space-between",
  },
  password: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
