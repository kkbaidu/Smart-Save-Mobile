import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Topup = () => {
  const [amount, setAmount] = useState("0.0");
  const router = useRouter();

  const handleDeposite = () => {
    const numericAmount = Number(amount);
    console.log(typeof numericAmount);
    if (typeof numericAmount !== "number") {
      Alert.alert("Invalid amount", "Please enter a valid amount");
    } else if (numericAmount <= 0) {
      Alert.alert("Invalid amount", "Please enter a valid amount");
    } else {
      Alert.alert("Success!", `${amount} added successfully!`);
    }
  };
  return (
    <View className="flex-1 bg-white px-4 w-full">
      {/* Header */}
      <View className="flex-row justify-between items-center mt-8">
        <TouchableOpacity
          onPress={() => {
            if (router.canGoBack()) {
              router.back();
            } else {
              Alert.alert("No previous screen to go back to.");
            }
          }}
          className=""
        >
          <FontAwesome name={"arrow-left"} size={15} />
        </TouchableOpacity>
        <Text className="text-lg font-bold">Add/Topup Money</Text>
        <View className="w-6" />
      </View>

      {/* Card Section */}
      <View className="my-12 items-center w-full px-6">
        <Image
          source={require("@/assets/images/card.jpg")}
          className="w-full h-64 rounded-3xl"
          resizeMode="contain"
        />
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
        <TouchableOpacity
          className="bg-blue-500 w-full py-4 rounded-lg items-center"
          onPress={handleDeposite}
        >
          <Text className="text-white text-lg font-bold">Deposit Money</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Topup;
