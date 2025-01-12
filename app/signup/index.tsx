import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const SignUpScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#32A5F4", "#3976C8", "#3976C8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      className="flex-1 justify-end items-center pt-16"
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
        {/* <Text className="text-white text-5xl">←</Text> */}
        <FontAwesome name={"arrow-left"} size={15} color={"#fff"} />
      </TouchableOpacity>
      {/* Header */}
      <View className="flex-col w-full items-start px-5">
        <Text className="text-white text-3xl font-bold text-left">
          Create A New Account
        </Text>
        <Text className="text-white text-sm text-left">
          Get started with SmartSave
        </Text>
      </View>

      {/* Form */}
      <ScrollView className="bg-white flex flex-1 mt-4 px-6 py-10 rounded-t-3xl w-full">
        {/* Username */}
        <View>
          <Text className="my-5 text-gray-700 text-sm font-semibold mb-2">
            Username
          </Text>
          <TextInput
            placeholder="example@maryp7"
            className="bg-gray-100 text-gray-500 py-3 px-4 rounded-full mb-4"
          />
        </View>

        {/* Email */}
        <View>
          <Text className="my-5 text-gray-700 text-sm font-semibold mb-2">
            Email
          </Text>
          <TextInput
            placeholder="example@example.com"
            className="bg-gray-100 text-gray-500 py-3 px-4 rounded-full mb-4"
          />
        </View>

        {/* Phone Number */}
        <View>
          <Text className="my-5 text-gray-700 text-sm font-semibold mb-2">
            Phone Number
          </Text>
          <TextInput
            placeholder="enter phone number"
            className="bg-gray-100 text-gray-500 py-3 px-4 rounded-full mb-4"
          />
        </View>

        {/* Password */}
        <View>
          <Text className="my-5 text-gray-700 text-sm font-semibold mb-2">
            Password
          </Text>
          <View className="relative">
            <TextInput
              placeholder="••••••••"
              secureTextEntry={!passwordVisible}
              className="bg-gray-100 text-gray-500 py-3 px-4 rounded-full"
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

        {/* Terms and Conditions */}
        <View className="flex-row items-center mt-4">
          {/* <Checkbox
            status={isChecked ? "checked" : "unchecked"}
            onPress={() => setIsChecked(!isChecked)}
            // className="mr-2"
          /> */}
          <Text className="text-gray-500">
            Accept the{" "}
            <Text className="text-blue-500 underline">Terms & Condition</Text>
          </Text>
        </View>

        {/* Proceed Button */}
        <TouchableOpacity
          className={`mt-8 py-3 rounded-full ${
            isChecked ? "bg-blue-100" : "bg-gray-300"
          }`}
          disabled={!isChecked}
        >
          <Text className="text-center font-semibold text-blue-500">
            Creat Account
          </Text>
        </TouchableOpacity>
        <Text className="text-back text-center text-xl font-bold my-3">OR</Text>
        <Text className="text-black text-center font-light">
          Already have an account?
        </Text>
        <TouchableOpacity
          className="bg-blue-500 py-3 rounded-full mb-4"
          onPress={() => router.push("/login")}
        >
          <Text className="text-white text-center font-semibold">Log In</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default SignUpScreen;
