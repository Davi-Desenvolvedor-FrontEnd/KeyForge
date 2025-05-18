import { View } from "react-native";
import { router, Tabs } from "expo-router";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
export default function TabsLayout() {
  const color = "#000";
  return (
    <>
      <StatusBar backgroundColor="black" />
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
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
            },
          }}
        />
        <Tabs.Screen
          name="password"
          options={{
            title: "Senhas",
            tabBarIcon: ({ size, focused }) => {
              if (focused) {
                return <Ionicons name="lock-open" size={24} color="black" />;
              } else {
                return (
                  <Ionicons
                    name="lock-closed-outline"
                    size={24}
                    color="black"
                  />
                );
              }
            },
            tabBarLabelStyle: {
              color: color,
              fontSize: 12,
              fontWeight: "bold",
            },
          }}
        />
        <Tabs.Screen
          name="generator_password"
          options={{
            title: "Gerador de Senhas",
            href: null,
            headerShown: true,
            headerTitle: "Voltar",
            headerLeft: () => {
              return (
                <FontAwesome
                  name="arrow-circle-left"
                  onPress={() => router.back()}
                  size={25}
                  color={"black"}
                  style={{ marginHorizontal: 10 }}
                />
              );
            },
            tabBarStyle: {
              display: "none",
            }
          }}
        />
        <Tabs.Screen
          name="save_password"
          options={{
            title: "Salvar Senha",
            href: null,
            headerShown: true,
            headerTitle: "Voltar",
            headerLeft: () => {
              return (
                <FontAwesome
                  name="arrow-circle-left"
                  onPress={() => router.back()}
                  size={25}
                  color={"black"}
                  style={{ marginHorizontal: 10 }}
                />
              );
            },
            tabBarStyle: {
              display: "none",
            }
          }}
        />
      </Tabs>
    </>
  );
}
