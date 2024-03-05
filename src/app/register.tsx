import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import {
  Pressable,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (email && password) {
      router.push("/(tabs)/tab1");
    } else {
      alert("Please enter your email address and password!");
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Google ile Giriş Yap");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex flex-1 justify-center items-center bg-accent">
        <StatusBar style="dark" />
        <Text className="text-4xl text-primary font-bold mb-8">Shitty App</Text>

        <View className="flex flex-col w-full justify-center items-start px-12">
          <Text className="mb-2 text-primary text-xl">Email</Text>
          <TextInput
            className="mb-4 rounded-full border-2 border-primary p-4 w-full text-primary placeholder:text-tertiary"
            placeholder="Enter your email address"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View className="flex flex-col w-full justify-center items-start px-12">
          <Text className="mb-2 text-primary text-xl">Password</Text>
          <TextInput
            className="mb-4 rounded-full border-2 border-primary p-4 w-full text-primary placeholder:text-tertiary"
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View className="flex flex-col w-full justify-center items-start px-12">
          <Text className="mb-2 text-primary text-xl">Confirm Password</Text>
          <TextInput
            className="mb-4 rounded-full border-2 border-primary p-4 w-full text-primary placeholder:text-tertiary"
            placeholder="Confirm your password"
            keyboardType="email-address"
            autoCapitalize="none"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
        <Pressable
          className="mb-4 bg-primary rounded-full py-3 px-4 w-4/5"
          onPress={handleLogin}
        >
          <Text className="font-bold text-lg text-center text-accent">
            Register
          </Text>
        </Pressable>

        <Pressable
          className="flex flex-row justify-center items-center mb-4 bg-google rounded-full py-3 px-4 w-4/5"
          onPress={handleGoogleSignIn}
        >
          <Ionicons
            name="logo-google"
            size={24}
            color="white"
            style={{ marginRight: 10 }}
          />
          <Text className="font-medium text-lg text-white text-center">
            Sign in with Google
          </Text>
        </Pressable>
        <Link href="/" className="mt-4 text-tertiary p-4">
          Already have an account?{" "}
          <Text className="text-primary font-bold">Login</Text>
        </Link>
      </View>
    </TouchableWithoutFeedback>
  );
}
