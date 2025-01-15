import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const CreateGoal = () => {
  const [goalCover, setGoalCover] = useState<string | null>(null); // For goal cover image
  const [goalName, setGoalName] = useState("");
  const [saveFrequency, setSaveFrequency] = useState("");
  const [duration, setDuration] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const router = useRouter();

  const handleGoalCoverChange = async () => {
    // Request media library permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access the media library is required!");
      return;
    }

    // Open image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"], // Use the updated approach with an array
      allowsEditing: true,
      aspect: [4, 3], // Optional: Crop aspect ratio
      quality: 1, // Image quality (0-1)
    });

    if (!result.canceled) {
      setGoalCover(result.assets[0].uri); // Update the state with the selected image URI
    } else {
      console.log("Image selection canceled.");
    }
  };

  const handleCreateGoal = () => {
    // Input validation
    if (!goalName.trim()) {
      alert("Please enter a name for your goal.");
      return;
    }
    if (!saveFrequency.trim()) {
      alert("Please select how often you want to save.");
      return;
    }
    if (!duration.trim()) {
      alert("Please select a duration.");
      return;
    }
    if (!targetAmount.trim() || isNaN(parseFloat(targetAmount))) {
      alert("Please enter a valid target amount.");
      return;
    }
    if (!targetDate.trim()) {
      alert("Please enter a target date.");
      return;
    }

    // Prepare goal data
    const goalData = {
      goalCover,
      goalName,
      saveFrequency,
      duration,
      targetAmount: parseFloat(targetAmount),
      targetDate,
    };

    console.log("Goal Data:", goalData);

    // Simulate API call or local storage save
    // Replace this with an actual API request (e.g., using fetch or axios)
    try {
      // Simulated success
      alert("Goal created successfully!");
      // Clear form fields
      setGoalCover(null);
      setGoalName("");
      setSaveFrequency("");
      setDuration("");
      setTargetAmount("");
      setTargetDate("");
      router.push("/(tabs)");
    } catch (error) {
      console.error("Error creating goal:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <View className="flex-1 bg-white relative">
      <TouchableOpacity
        onPress={() => {
          if (router.canGoBack()) {
            router.back();
          } else {
            Alert.alert("No previous screen to go back to.");
          }
        }}
        className="mt-4 ml-4"
      >
        <FontAwesome name={"arrow-left"} size={15} />
      </TouchableOpacity>

      <ScrollView className="flex-1 bg-white px-6">
        <Text className="text-2xl font-bold mb-6 text-center">
          Create a Goal
        </Text>

        <TouchableOpacity
          onPress={handleGoalCoverChange}
          className="w-full h-36 bg-gray-100 rounded-lg justify-center items-center mb-4"
        >
          {goalCover ? (
            <Image
              source={{ uri: goalCover }}
              className="w-full h-full rounded-lg"
            />
          ) : (
            <Text className="text-gray-400">Tap to change</Text>
          )}
        </TouchableOpacity>

        <Text className="text-gray-800 mb-2">Give your goal a name</Text>
        <TextInput
          value={goalName}
          onChangeText={setGoalName}
          placeholder="Enter name"
          className="border border-gray-300 rounded-lg p-3 mb-4"
        />

        <Text className="text-gray-800 mb-2">
          How often would you like to save
        </Text>
        <TextInput
          value={saveFrequency}
          onChangeText={setSaveFrequency}
          placeholder="Select"
          className="border border-gray-300 rounded-lg p-3 mb-4"
        />

        <Text className="text-gray-800 mb-2">Select Duration</Text>
        <TextInput
          value={duration}
          onChangeText={setDuration}
          placeholder="3 Months"
          className="border border-gray-300 rounded-lg p-3 mb-4"
        />

        <Text className="text-gray-800 mb-2">Target Amount</Text>
        <TextInput
          value={targetAmount}
          onChangeText={setTargetAmount}
          placeholder="Placeholder"
          className="border border-gray-300 rounded-lg p-3 mb-4"
          keyboardType="numeric"
        />

        <Text className="text-gray-800 mb-2">Target Date</Text>
        <TextInput
          value={targetDate}
          onChangeText={setTargetDate}
          placeholder="12/01/2025"
          className="border border-gray-300 rounded-lg p-3 mb-6"
        />

        <TouchableOpacity
          onPress={handleCreateGoal}
          className="bg-blue-500 rounded-lg py-4 mb-6"
        >
          <Text className="text-white text-center text-lg font-bold">
            Create Goal
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CreateGoal;
