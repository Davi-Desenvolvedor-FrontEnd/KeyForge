import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useStorage from "../../hooks/useStorage";
import PasswordItem from "../../components/password";

export default function PasswordScreen() {
  const [listPasswords, setListPasswords] = useState([]);
  const focus = useIsFocused();
  const { getItem, removeItem } = useStorage();
  async function handleDeletePassword(id) {
    const passwors = await removeItem("@pass", id);
    setListPasswords(passwors);
  }
  useEffect(() => {
    async function loadPasswordsList() {
      const passwords = await getItem("@pass");
      setListPasswords(passwords);
    }
    loadPasswordsList();
  }, [focus]);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas senhas</Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={listPasswords}
        contentContainerStyle={{
          flex: 1,
          padding: 10,
        }}
        renderItem={({ item }) => {
          return (
            <PasswordItem
              password={item.password}
              name={item.name}
              removePassword={() => handleDeletePassword(item.id)}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
