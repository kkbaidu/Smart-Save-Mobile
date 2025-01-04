import { View, Text, TouchableOpacity, Image } from "react-native";
import Header from "@/components/Header";
import BottomTab from "@/components/BottomTab";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white px-6">
      {/* Header */}
      <Header title="SmartSave" subtitle="Welcome back, Mary!" />

      {/* Financial Overview */}
      <View className="flex-1 items-center justify-center">
        <View className="my-4">
          <Text className="text-xl text-blue-500 font-bold text-center">
            Unlock
          </Text>
          <Text className="text-2xl text-black font-bold text-center">
            Your Financial Future.
          </Text>
        </View>

        {/* Savings Card */}
        <View className="bg-blue-500 rounded-lg p-6 w-full items-center mb-4">
          <Text className="text-white text-lg font-bold">₵ 2,900.00</Text>
          <Text className="text-white">Total savings</Text>
        </View>

        {/* Income and Expenses */}
        <View className="flex-row justify-between w-full mb-4">
          <View className="items-center bg-blue-200 rounded-md p-4 w-[45%]">
            <Text className="text-blue-500 text-xl font-bold">⬆</Text>
            <Text className="text-gray-700">Income</Text>
            <Text className="text-gray-700">₵4500</Text>
          </View>
          <View className="items-center bg-red-200 rounded-md p-4 w-[45%]">
            <Text className="text-red-500 text-xl font-bold">⬇</Text>
            <Text className="text-gray-700">Expenses</Text>
            <Text className="text-gray-700">₵2000</Text>
          </View>
        </View>

        {/* Goals Button */}
        <TouchableOpacity className="bg-blue-500 rounded-lg p-4 w-full flex-row justify-center items-center">
          <Text className="text-white font-bold mr-2">GOALS</Text>
          <Text className="text-white">→</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      {/* <BottomTab /> */}
    </View>
  );
};

export default HomeScreen;
