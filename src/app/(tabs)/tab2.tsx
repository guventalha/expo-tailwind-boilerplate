import { View, Text } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const Page = () => {
  const { top } = useSafeAreaInsets();
  return (
    // <SafeAreaView>
    <View
      className="flex flex-1 justify-center items-center"
      style={{ paddingTop: top }}
    >
      <Text className="text-3xl text-blue-600 font-medium">tab2</Text>
    </View>
    // </SafeAreaView>
  );
};

export default Page;
