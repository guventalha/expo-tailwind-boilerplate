import Header from "@/components/Header";
import "../global.css";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eedfcc",
        },
        headerTintColor: "#0f372b",
        headerTitle: () => <Header />,
        headerShown: false,
      }}
    />
  );
}
