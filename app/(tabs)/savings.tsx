import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { ProgressBar } from "react-native-paper";

const SavingGoalsScreen = () => {
  const savingGoals = [
    {
      id: 1,
      name: "Emergency Fund",
      amountSaved: "₵1,000",
      targetAmount: "₵800",
      progress: 0.8,
      growth: "+20%",
      growthPositive: true,
      icon: "🚨",
    },
    {
      id: 2,
      name: "Beauty and Maintenance",
      amountSaved: "₵300",
      targetAmount: "₵700",
      progress: 0.4,
      growth: null,
      growthPositive: null,
      icon: "💅",
    },
    {
      id: 3,
      name: "Laptop Savings",
      amountSaved: "₵1,500",
      targetAmount: "₵3,000",
      progress: 0.5,
      growth: "+25%",
      growthPositive: true,
      icon: "💻",
    },
    {
      id: 4,
      name: "Personal Savings",
      amountSaved: "₵1,000",
      targetAmount: "₵4,000",
      progress: 0.25,
      growth: null,
      growthPositive: null,
      icon: "💰",
    },
  ];

  return (
    <View className="flex-1 bg-[#3875C8]">
      {/* Header */}
      <View className="flex-row justify-between items-center mt-6 px-4">
        <Text className="text-white text-xl font-bold">20 🔥</Text>
        <View className="flex-row items-center space-x-2">
          <TouchableOpacity>
            <Image
              source={require("@/assets/images/profile-pic.png")}
              className="w-10 h-10 rounded-full mr-1"
            />
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-100 p-2 rounded-full">
            <Image
              source={require("@/assets/images/bell-icon.png")}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Title */}
      <Text className="text-center text-white text-2xl font-bold mt-20">
        Saving Goals
      </Text>

      {/* Goals Section */}
      <View className="bg-white rounded-t-3xl mt-2 flex-1">
        <View className="flex-row justify-between items-center px-6 py-4">
          <Text className="text-gray-800 text-2xl font-bold">My Goals</Text>
          <TouchableOpacity>
            <Text className="text-blue-500 text-2xl font-bold">+</Text>
          </TouchableOpacity>
        </View>

        {/* Saving Goals List */}
        <FlatList
          data={savingGoals}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="mb-6 px-6">
              {/* Goal Row */}
              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center space-x-4">
                  <View className="flex justify-center border border-[#D9D9D9] w-10 h-10 rounded-xl">
                    <Text className="text-2xl text-center">{item.icon}</Text>
                  </View>
                  <View className="ml-2">
                    <Text className="text-gray-700 font-bold">{item.name}</Text>
                    <Text className="text-black text-lg font-bold">
                      {item.amountSaved}
                    </Text>
                  </View>
                </View>
                {item.growth && (
                  <Text
                    className={`text-sm px-2 py-1 rounded-full ${
                      item.growthPositive
                        ? "bg-green-100 text-green-500"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {item.growth}
                  </Text>
                )}
              </View>

              {/* Progress Bar */}
              <ProgressBar
                progress={item.progress}
                color="#3b82f6"
                style={{
                  height: 8,
                  borderRadius: 20,
                  backgroundColor: "#e5e7eb",
                  marginTop: 10,
                }}
              />
              <View className="flex-row justify-between mt-2">
                <Text className="text-gray-500">{item.targetAmount}</Text>
                <Text className="text-gray-500">{item.targetAmount}</Text>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 16 }} // Ensures scrollable space at the bottom
        />
      </View>
    </View>
  );
};

export default SavingGoalsScreen;
