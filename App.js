import { View } from "react-native";
import Layout from "./src/router";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black"/>
      <Layout/>
    </NavigationContainer>
  );
}

