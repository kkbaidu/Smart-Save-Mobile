import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import { RenderSavings } from "@/components/RenderSavings";
import { FontAwesome } from "@expo/vector-icons";
import { savings, transactions } from "@/components/utils/data";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const SavingGoals = () => {
  const [seeAll, setSeeAll] = useState(false);
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#32A5F4", "#3976C8", "#3976C8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      className="flex-1 justify-end items-center relative"
    >
      <ScrollView
        contentContainerStyle={{ paddingBottom: 16, backgroundColor: "#fff" }}
      >
        <View className="bg-white">
          <View className="bg-[#3875C8] rounded-b-[2rem]">
            {/* Header */}
            <View className="flex-col justify-between items-center px-4 mt-6">
              <View className="w-full flex flex-row justify-between mb-4">
                <TouchableOpacity
                  onPress={() => {
                    if (router.canGoBack()) {
                      router.back();
                    } else {
                      Alert.alert("No previous screen to go back to.");
                    }
                  }}
                >
                  {/* <Text className="text-white text-5xl">←</Text> */}
                  <FontAwesome name={"arrow-left"} size={15} color={"#fff"} />
                </TouchableOpacity>
                <Text className="text-white text-sm w-48">
                  Mary, you are 90% closer to your monthly saving goal 🎉!
                </Text>
                <Image
                  source={require("@/assets/images/profile-pic.png")}
                  className="w-10 h-10 rounded-full mr-1"
                />
              </View>
              <View className="w-full flex flex-row justify-between">
                <Text className="text-white text-xl font-bold mt-2">20 🔥</Text>
                <TouchableOpacity
                  className="bg-white flex-row justify-center items-center p-2 rounded-full w-32"
                  onPress={() => router.push("/create-goal")}
                >
                  <Text className="text-blue-500 font-bold">Create </Text>
                  <View className="flex justify-center items-center border-[2px] border-green-500 rounded-full w-7 h-7 p-1">
                    <FontAwesome name={"plus"} size={15} color={"#22c55e"} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* Savings Cards */}
            <RenderSavings savings={savings} />
          </View>
          {/* Recent Transactions */}
          <View className="px-6 py-4">
            <View className="w-full flex flex-row justify-between items-center">
              <Text className="text-lg font-bold text-gray-700">
                Recent Transactions
              </Text>
              <TouchableOpacity onPress={() => setSeeAll(!seeAll)}>
                <Text className="text-[#4E38C8] text-sm text-right mt-1">
                  {seeAll ? "See less" : "See all"}
                </Text>
              </TouchableOpacity>
            </View>
            <View className="pb-5 bg-[#D9D9D9] rounded-3xl">
              {transactions.map((item) => (
                <View
                  key={item.id}
                  className="bg-white px-6 py-4 mx-8 mt-4 rounded-lg flex-row justify-between items-center shadow-sm"
                >
                  <View>
                    <Text className="text-gray-700 font-bold">{item.type}</Text>
                    <Text className="text-gray-400 text-sm">{item.date}</Text>
                  </View>
                  <Text className="text-green-500 font-bold">
                    {item.amount}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SavingGoals;
