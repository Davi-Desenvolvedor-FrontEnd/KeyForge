// app/_layout.tsx
import { Slot } from "expo-router";
import { View, StatusBar, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />
      <View style={styles.container}>
        {/* StatusBar será renderizada em todas as telas */}
        {/* Slot renderiza a rota filha—que pode ser o _layout de tabs ou diretamente uma tela */}
        <Slot />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
