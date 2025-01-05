import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Account = () => {
  const [seeAll, setSeeAll] = useState(false);

  const savings = [
    {
      id: 1,
      name: "Personal Savings",
      amount: "₵1000",
      growth: "+12%",
      growthPositive: true,
      icon: "💰",
    },
    {
      id: 2,
      name: "Laptop Savings",
      amount: "₵1500",
      growth: null,
      growthPositive: null,
      icon: "💻",
    },
    {
      id: 3,
      name: "Emergency Fund",
      amount: "₵100",
      growth: null,
      growthPositive: null,
      icon: "🚨",
    },
    {
      id: 4,
      name: "Beauty Savings",
      amount: "₵300",
      growth: "+5%",
      growthPositive: true,
      icon: "💄",
    },
  ];

  const transactions = [
    { id: 1, type: "Top Up", amount: "₵500.00", date: "Today 2:34pm" },
    { id: 2, type: "Add Money", amount: "₵200.00", date: "Today 5:04pm" },
    { id: 3, type: "Top Up", amount: "₵500.00", date: "Yesterday 6:14pm" },
    { id: 4, type: "Add Money", amount: "₵700.00", date: "Yesterday 7:34pm" },
  ];

  const renderSavings = () => (
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
          <TouchableOpacity className="bg-gray-100 rounded-full px-4 py-2 mt-3">
            <Text className="text-center text-gray-700 font-bold">
              {saving.growth ? "Topup" : "Add money"}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 16, backgroundColor: "#fff" }}
    >
      <View className="bg-white">
        <View className="bg-[#3875C8] rounded-b-[2rem]">
          {/* Header */}
          <View className="flex-col justify-between items-center px-4 mt-6">
            <View className="w-full flex flex-row justify-between mb-4">
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
              <TouchableOpacity className="bg-white flex-row justify-center items-center p-2 rounded-full w-32">
                <Text className="text-blue-500 font-bold">Create </Text>
                <View className="flex justify-center items-center border-[2px] border-green-500 rounded-full w-7 h-7 p-1">
                  <FontAwesome name={"plus"} size={15} color={"#22c55e"} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* Savings Cards */}
          {renderSavings()}
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
                <Text className="text-green-500 font-bold">{item.amount}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Account;
