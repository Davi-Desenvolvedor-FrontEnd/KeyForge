import { Pressable, Text, TextInput, View } from "react-native";
import { Divider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { estilos } from "../../global_styles/styles";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View
      style={{
        gap: 20,
        height: "100%",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text style={estilos.Title}>KeyForge</Text>
      <View style={{ width: "100%", marginVertical: "auto", padding: 10 }}>
        <Pressable
          style={estilos.ButtonRouter}
          onPress={() => {router.push("/save_password")}}
        >
          <Text style={estilos.Text}>Guarde uma senha</Text>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            gap: 10,
            marginVertical: 20,
            alignSelf: "center",
          }}
        >
          <Divider
            bold
            style={{ backgroundColor: "#000", height: 1, width: "100%" }}
          />
          <Text>Ou</Text>
          <Divider
            bold
            style={{ backgroundColor: "#000", height: 1, width: "100%" }}
          />
        </View>
        <Pressable
          style={estilos.ButtonRouter}
          onPress={() => {router.push('/generator_password')}}
        >
          <Text style={estilos.Text}>Crie uma</Text>
        </Pressable>
      </View>
    </View>
  );
}
