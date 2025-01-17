import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Stack, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (email && password) {
      Alert.alert("Login Successful", "Welcome back!");
      router.replace("/(tabs)");
    } else {
      Alert.alert("Error", "Please enter both email and password.");
    }
  };

  return (
    <LinearGradient
      colors={["#32A5F4", "#3976C8", "#3976C8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      className="flex-1 justify-end items-center pt-40"
    >
      <TouchableOpacity
        onPress={() => {
          if (router.canGoBack()) {
            router.back();
          } else {
            Alert.alert("No previous screen to go back to.");
          }
        }}
        className="absolute top-4 left-4"
      >
        <FontAwesome name={"arrow-left"} size={15} color={"#fff"} />
      </TouchableOpacity>
      {/* Welcome Text */}
      <Text className="text-white text-3xl font-bold">Login</Text>

      <View className="bg-white flex flex-1 items-center mt-4 py-10 rounded-t-3xl w-full">
        {/* Login Card */}
        <View className="w-11/12 p-6">
          {/* Username or Email */}
          <View>
            <Text className="my-5 text-gray-700 text-sm font-bold mb-2">
              Username/Email
            </Text>
            <TextInput
              placeholder="example@example.com"
              className="bg-gray-100 text-gray-500 py-3 px-4 rounded-full mb-4"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password */}
          <View>
            <Text className="my-5 text-gray-700 text-sm mb-2 font-bold">
              Password
            </Text>
            <View className="relative">
              <TextInput
                placeholder="••••••••"
                secureTextEntry={!passwordVisible}
                className="bg-gray-100 text-gray-500 py-3 px-4 rounded-full"
                value={password}
                onChangeText={setPassword}
              />

              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
                className="absolute right-4 top-3"
              >
                <Text className="text-gray-500">
                  {passwordVisible ? "🙈" : "👁️"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Buttons */}
          <TouchableOpacity
            className="bg-blue-500 py-3 rounded-full mt-8"
            onPress={handleLogin}
          >
            <Text className="text-white text-center font-semibold">Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity className="mt-4">
            <Text className="text-blue-500 text-center">Forgot Password?</Text>
          </TouchableOpacity>
          <Text className="text-back text-center text-xl font-bold my-3">
            OR
          </Text>
          <Text className="text-black text-center font-light">
            Don’t have an account?
          </Text>
          <TouchableOpacity
            className="bg-blue-100 py-3 rounded-full mt-4"
            onPress={() => router.push("/signup")}
          >
            <Text className="text-blue-500 text-center font-semibold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
