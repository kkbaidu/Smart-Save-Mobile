import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";

const Insights = () => {
  return (
    <ScrollView className="flex-1 bg-white px-4">
      {/* Header */}
      <View className="flex-row justify-between items-center mt-8">
        <TouchableOpacity>
          <FontAwesome name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-bold">Insights</Text>
        <TouchableOpacity>
          <FontAwesome name="bell-o" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Current Savings */}
      <View className="items-center mt-6">
        <Text className="text-gray-500">Current Savings</Text>
        <Text className="text-3xl font-bold mt-2">₵2,900.00</Text>
      </View>

      {/* Chart */}
      <View className="mt-6">
        <LineChart
          data={{
            labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
            datasets: [
              {
                data: [1000, 1500, 1800, 2900, 2500, 3000],
              },
            ],
          }}
          width={350} // from react-native
          height={220}
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#1E90FF",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>

      {/* Goals */}
      <View className="flex-row justify-between items-center mt-6">
        <Text className="text-lg font-bold">Goals</Text>
        <TouchableOpacity>
          <Text className="text-blue-500">See All</Text>
        </TouchableOpacity>
      </View>

      {/* Goals List */}
      <View className="mt-4">
        {/* Emergency Fund */}
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center">
            <View className="bg-red-100 p-3 rounded-full justify-center items-center">
              <FontAwesome name="umbrella" size={20} color="red" />
            </View>
            <View className="ml-4">
              <Text className="font-bold">Emergency Fund</Text>
              <Text className="text-gray-500 text-sm">Necessity</Text>
            </View>
          </View>
          <Text className="font-bold">₵1000</Text>
        </View>

        {/* Laptop Savings */}
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center">
            <View className="bg-gray-100 p-3 rounded-full justify-center items-center">
              <FontAwesome name="laptop" size={20} color="black" />
            </View>
            <View className="ml-4">
              <Text className="font-bold">Laptop Savings</Text>
              <Text className="text-gray-500 text-sm">Necessity</Text>
            </View>
          </View>
          <Text className="font-bold">₵1500</Text>
        </View>

        {/* Beauty Savings */}
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center">
            <View className="bg-pink-100 p-3 rounded-full justify-center items-center">
              <FontAwesome name="paint-brush" size={20} color="pink" />
            </View>
            <View className="ml-4">
              <Text className="font-bold">Beauty Savings</Text>
              <Text className="text-gray-500 text-sm">Luxury</Text>
            </View>
          </View>
          <Text className="font-bold text-blue-500">₵300</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Insights;
