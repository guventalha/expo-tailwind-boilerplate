import { View, Text, TextInput } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
const Header = () => {
  return (
    <View className="flex flex-row justify-center items-center m-2">
      <Ionicons name="search" size={24} color="#0f372b" className="mb-3" />
      <TextInput
        className="mb-4 rounded-full border-2 border-primary p-2 w-4/5 text-primary placeholder:text-tertiary"
        placeholder="Search..."
        keyboardType="default"
        autoCapitalize="none"
      />
    </View>
  );
};

export default Header;
