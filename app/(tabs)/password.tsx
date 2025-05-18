import Header from "@/components/Header";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import PasswordItem from "../../components/PasswordItem";
import useStorage from "../../hooks/useStorage";

type PasswordItemType = {
  id: number;
  password: string;
  name: string;
};

export default function PasswordScreen() {
  const [listPasswords, setListPasswords] = useState<PasswordItemType[]>([]);
  const focus = useIsFocused();
  const { getItem, removeItem } = useStorage();
  async function handleDeletePassword(id: number) {
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
      <Header title="Minhas senhas" />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
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
