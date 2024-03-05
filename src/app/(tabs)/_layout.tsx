import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import "../../global.css";
import { View } from "react-native";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="tab1"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => {
            return <Ionicons name="home" size={24} color="#0f372b" />;
          },
          tabBarBackground: () => {
            return <View className="bg-accent" />;
          },
          tabBarStyle: { backgroundColor: "#ffefdb" },
        }}
      />
      <Tabs.Screen
        name="tab2"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => {
            return <Ionicons name="person" size={24} color="#0f372b" />;
          },
        }}
      />
    </Tabs>
  );
};

export default Layout;
