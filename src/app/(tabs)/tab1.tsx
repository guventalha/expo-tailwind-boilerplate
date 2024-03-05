import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "@/components/Header";

const Page = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      className="flex flex-col flex-1 justify-between items-center bg-accent"
      style={{ paddingTop: top }}
    >
      <Header />
      <Text>One</Text>
      <Link href="/" asChild replace>
        <Button title="Home" />
      </Link>
    </View>
  );
};

export default Page;
