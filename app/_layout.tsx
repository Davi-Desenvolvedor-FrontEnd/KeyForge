// app/_layout.tsx
import { Slot } from "expo-router";
import { View, StatusBar, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />
      <View style={styles.container}>
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
