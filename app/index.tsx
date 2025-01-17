import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

const LandingScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white justify-center items-center">
      {/* Logo Section */}
      <View className="flex flex-col items-center">
        <Image
          source={require("@/assets/images/vector-arrows.png")}
          className="w-[10rem] h-[5rem] mb-5"
          resizeMode="contain"
        />
        <Image
          source={require("@/assets/images/smart-save-logo.png")}
          className="w-[15rem] h-[5rem]"
          resizeMode="contain"
        />
      </View>

      {/* Title Section */}
      <Text className="text-sm text-center text-gray-500">
        <Text className="text-[#2F80C2]">Unlock</Text> Your Financial Future.
      </Text>

      {/* Buttons Section */}
      <View className="mt-10 w-3/4">
        <TouchableOpacity
          className="bg-blue-500 py-3 rounded-full mb-4"
          onPress={() => router.push("/login")}
        >
          <Text className="text-white text-center font-semibold">Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-blue-100 py-3 rounded-full"
          onPress={() => router.push("/signup")}
        >
          <Text className="text-blue-500 text-center font-semibold">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingScreen;
