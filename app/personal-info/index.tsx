import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function EditProfileScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-end items-center relative bg-white">
      <ScrollView className="flex-1 w-full px-8">
        {/* Header */}
        <TouchableOpacity
          onPress={() => {
            if (router.canGoBack()) {
              router.back();
            } else {
              Alert.alert("No previous screen to go back to.");
            }
          }}
          className="absolute top-4"
        >
          <FontAwesome name={"arrow-left"} size={15} />
        </TouchableOpacity>
        <View className="items-center mt-8 w-full">
          <Text className="text-lg font-bold text-center">Edit Profile</Text>
        </View>

        {/* Profile Section */}
        <View className="items-center mt-8">
          <Image
            source={require("@/assets/images/profile-pic.png")}
            className="w-24 h-24 rounded-full"
          />
          <Text className="text-lg font-bold mt-4 text-blue-500">
            Mary Myroniuk
          </Text>
          <Text className="text-gray-500">Level 4 Saver</Text>
        </View>

        {/* Form Fields */}
        <View className="mt-8">
          {/* Full Name */}
          <View className="mb-4">
            <Text className="text-gray-500 mb-2">Full Name</Text>
            <View className="flex-row items-center border-b border-gray-300 pb-2">
              <FontAwesome name="user-o" size={20} color="black" />
              <TextInput
                className="flex-1 ml-4 text-base"
                value="Mary Akua"
                editable={true}
              />
            </View>
          </View>

          {/* Email Address */}
          <View className="mb-4">
            <Text className="text-gray-500 mb-2">Email Address</Text>
            <View className="flex-row items-center border-b border-gray-300 pb-2">
              <FontAwesome name="envelope-o" size={20} color="black" />
              <TextInput
                className="flex-1 ml-4 text-base"
                value="maryakua@gmail.com"
                editable={true}
                keyboardType="email-address"
              />
            </View>
          </View>

          {/* Phone Number */}
          <View className="mb-4">
            <Text className="text-gray-500 mb-2">Phone Number</Text>
            <View className="flex-row items-center border-b border-gray-300 pb-2">
              <FontAwesome name="phone" size={20} color="black" />
              <TextInput
                className="flex-1 ml-4 text-base"
                value="0203215867"
                editable={true}
                keyboardType="phone-pad"
              />
            </View>
          </View>

          {/* Birth Date */}
          <View className="mb-4">
            <Text className="text-gray-500 mb-2">Birth Date</Text>
            <View className="flex-row justify-between">
              <TextInput
                className="text-center text-base border-b border-gray-300 flex-1 mx-1"
                value="28"
                editable={true}
                keyboardType="numeric"
              />
              <TextInput
                className="text-center text-base border-b border-gray-300 flex-1 mx-1"
                value="September"
                editable={true}
              />
              <TextInput
                className="text-center text-base border-b border-gray-300 flex-1 mx-1"
                value="2000"
                editable={true}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>

        {/* Joined Date */}
        <View className="mt-4 items-center">
          <Text className="text-blue-500 text-sm">Joined 15 Jan 2025</Text>
        </View>
        <TouchableOpacity
          className="bg-blue-500 py-3 rounded-full mt-8 mb-4"
          onPress={() => {
            Alert.alert("Success", "Personal Information updated successfully");
            router.push("/(tabs)/account");
          }}
        >
          <Text className="text-white text-center font-semibold">Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
