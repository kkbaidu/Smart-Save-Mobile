import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Account = () => {
  const router = useRouter();
  return (
    <ScrollView className="flex-1 bg-white px-8">
      {/* Header */}
      <View className="flex-row justify-between items-center mt-8">
        <View></View>
        <Text className="text-lg font-bold ml-3">Profile</Text>
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
          <FontAwesome name={"arrow-left"} size={15} color={"#fff"} />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View className="flex flex-row justify-start items-center mt-8">
        <Image
          source={require("@/assets/images/profile-pic.png")}
          className="w-24 h-24 rounded-full"
        />
        <View className="flex flex-col ml-3">
          <Text className="text-lg font-bold mt-4 text-blue-500">
            Mary Myroniuk
          </Text>
          <Text className="text-gray-500">Level 4 Saver</Text>
        </View>
      </View>

      {/* Menu Options */}
      <View className="mt-8">
        {/* Personal Information */}
        <TouchableOpacity
          className="flex-row items-center justify-between py-4 border-b mb-3 border-gray-200"
          onPress={() => router.push("/personal-info")}
        >
          <View className="flex-row items-center">
            <FontAwesome name="user-o" size={20} color="black" />
            <Text className="ml-4 text-base">Personal Information</Text>
          </View>
          <FontAwesome name="chevron-right" size={20} color="gray" />
        </TouchableOpacity>

        {/* Payment Preferences */}
        <TouchableOpacity className="flex-row items-center justify-between py-4 border-b mb-3 border-gray-200">
          <View className="flex-row items-center">
            <FontAwesome name="credit-card" size={20} color="black" />
            <Text className="ml-4 text-base">Payment Preferences</Text>
          </View>
          <FontAwesome name="chevron-right" size={20} color="gray" />
        </TouchableOpacity>

        {/* Banks and Cards */}
        <TouchableOpacity className="flex-row items-center justify-between py-4 border-b mb-3 border-gray-200">
          <View className="flex-row items-center">
            <FontAwesome name="bank" size={20} color="black" />
            <Text className="ml-4 text-base">Banks and Cards</Text>
          </View>
          <FontAwesome name="chevron-right" size={20} color="gray" />
        </TouchableOpacity>

        {/* Notifications */}
        <TouchableOpacity className="flex-row items-center justify-between py-4 border-b mb-3 border-gray-200">
          <View className="flex-row items-center">
            <FontAwesome name="bell-o" size={20} color="black" />
            <Text className="ml-4 text-base">Notifications</Text>
          </View>
          <View className="flex-row items-center">
            <View className="bg-red-500 px-2 rounded-full">
              <Text className="text-white text-sm">2</Text>
            </View>
            <FontAwesome
              name="chevron-right"
              size={20}
              color="gray"
              className="ml-2"
            />
          </View>
        </TouchableOpacity>

        {/* Message Center */}
        <TouchableOpacity className="flex-row items-center justify-between py-4 border-b mb-3 border-gray-200">
          <View className="flex-row items-center">
            <FontAwesome name="envelope-o" size={20} color="black" />
            <Text className="ml-4 text-base">Message Center</Text>
          </View>
          <FontAwesome name="chevron-right" size={20} color="gray" />
        </TouchableOpacity>

        {/* Settings */}
        <TouchableOpacity className="flex-row items-center justify-between py-4 border-b mb-3 border-gray-200">
          <View className="flex-row items-center">
            <FontAwesome name="gear" size={20} color="black" />
            <Text className="ml-4 text-base">Settings</Text>
          </View>
          <FontAwesome name="chevron-right" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Account;
