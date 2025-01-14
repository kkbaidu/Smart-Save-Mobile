import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Topup = () => {
  const [amount, setAmount] = useState("36.00");

  return (
    <View className="flex-1 bg-white px-4">
      {/* Header */}
      <View className="flex-row justify-between items-center mt-8">
        <TouchableOpacity>
          <FontAwesome name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-bold">Add/Topup Money</Text>
        <View className="w-6" />
      </View>

      {/* Card Section */}
      <View className="mt-8 items-center">
        <View className="w-full h-48 rounded-xl overflow-hidden relative bg-[#1E3A8A]">
          <ImageBackground
            source={{ uri: "https://via.placeholder.com/350x200" }} // Replace with card background image if needed
            className="flex-1"
          >
            <View className="absolute top-6 left-4">
              <FontAwesome name="credit-card" size={24} color="white" />
            </View>
            <View className="absolute bottom-10 left-4">
              <Text className="text-white text-xl font-bold">
                4562 1122 4595 7852
              </Text>
              <Text className="text-white mt-2">AR Jonson</Text>
              <View className="flex-row mt-1">
                <Text className="text-white text-sm">Expiry Date: 24/2000</Text>
                <Text className="text-white text-sm ml-4">CVV: 6986</Text>
              </View>
            </View>
            <View className="absolute bottom-10 right-4">
              <Text className="text-white text-sm font-bold">Mastercard</Text>
            </View>
          </ImageBackground>
        </View>
      </View>

      {/* Amount Input */}
      <View className="mt-8">
        <Text className="text-gray-500 mb-2 text-center">
          Enter Your Amount
        </Text>
        <View className="flex-row items-center justify-center border border-gray-300 rounded-lg p-4">
          <Text className="text-2xl font-bold">₵</Text>
          <TextInput
            className="text-2xl font-bold ml-2 flex-1 text-center"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
        </View>
      </View>

      {/* Deposit Button */}
      <View className="mt-12 items-center">
        <TouchableOpacity className="bg-blue-500 w-full py-4 rounded-lg items-center">
          <Text className="text-white text-lg font-bold">Deposit Money</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Topup;
