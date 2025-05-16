import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PasswordScreen from "./pages/password";
import HomeScreen from "./pages";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
export default function Layout() {
  const color = "#000";
  return (
    <Tab.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={24} color={color} />;
            } else {
              return <Ionicons name="home-outline" size={24} color={color} />;
            }
          },
          tabBarLabelStyle: {
            color: color,
            fontSize: 12,
            fontWeight: "bold",
          }
        }}
      />
      <Tab.Screen
        name="Senhas"
        component={PasswordScreen}
        options={{
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return <Ionicons name="lock-open" size={24} color="black" />
            } else {
              return <Ionicons name="lock-closed-outline" size={24} color="black" />
            }
          },
          tabBarLabelStyle: {
            color: color,
            fontSize: 12,
            fontWeight: "bold",
          }
        }}
      />
    </Tab.Navigator>
  );
}
