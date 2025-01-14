import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Savings } from "./utils/types";
import { useRouter } from "expo-router";

export const RenderSavings = ({ savings }: { savings: Savings[] }) => {
  const router = useRouter();

  return (
    <View className="flex-wrap flex-row justify-between mt-6 px-4 mb-10">
      {savings.map((saving) => (
        <View
          key={saving.id}
          className="bg-[#E0E3E94D] rounded-tl-3xl rounded-br-3xl w-[48%] mb-4 p-4 relative"
        >
          <Text className="text-2xl text-center bg-white w-[30px] h-[30px] rounded-lg">
            {saving.icon}
          </Text>
          <TouchableOpacity className="absolute top-2 right-2">
            <Text className="text-red-500">📌</Text>
          </TouchableOpacity>
          <Text className="text-gray-700 font-bold mt-2">{saving.name}</Text>
          <View className="flex flex-row justify-between items-center">
            <Text className="text-purple-600 text-lg font-bold text-left">
              {saving.amount}
            </Text>
            {saving.growth && (
              <Text
                className={`text-[10px] text-white font-light text-center rounded-lg ${
                  saving.growthPositive ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {saving.growth} {saving.growthPositive ? "➚" : "⬋"}
              </Text>
            )}
          </View>
          <TouchableOpacity
            className="bg-gray-100 rounded-full px-4 py-2 mt-3"
            onPress={() => router.push("/top-up")}
          >
            <Text className="text-center text-gray-700 font-bold">
              {saving.growth ? "Topup" : "Add money"}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
