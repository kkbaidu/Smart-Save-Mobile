import { View, Text, TouchableOpacity, FlatList } from "react-native";

const Account = () => {
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
    <View className="flex-wrap flex-row justify-between mt-6 px-4">
      {savings.map((saving) => (
        <View
          key={saving.id}
          className="bg-white rounded-lg w-[48%] mb-4 p-4 relative"
        >
          <Text className="text-2xl">{saving.icon}</Text>
          <TouchableOpacity className="absolute top-2 right-2">
            <Text className="text-red-500">📌</Text>
          </TouchableOpacity>
          <Text className="text-gray-700 font-bold mt-2">{saving.name}</Text>
          <Text className="text-purple-600 text-lg font-bold mt-2">
            {saving.amount}
          </Text>
          {saving.growth && (
            <Text
              className={`text-sm mt-1 ${
                saving.growthPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {saving.growth} {saving.growthPositive ? "⬆" : "⬇"}
            </Text>
          )}
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
    <View className="flex-1 bg-blue-500">
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
        ListHeaderComponent={
          <>
            {/* Header */}
            <View className="flex-col justify-between items-center px-4 mt-6">
              <View>
                <Text className="text-white text-sm">
                  Mary, you are 90% closer to your monthly saving goal 🎉!
                </Text>
              </View>
              <View className="w-full flex flex-row justify-between">
                <Text className="text-white text-xl font-bold mt-2">20 🔥</Text>
                <TouchableOpacity className="bg-white flex-row items-center p-2 rounded-full">
                  <Text className="text-blue-500 font-bold">Create</Text>
                  <Text className="text-green-500 text-lg ml-1">➕</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Savings Cards */}
            {renderSavings()}

            {/* Recent Transactions Header */}
            <View className="bg-white rounded-t-3xl px-6 py-4 mt-6">
              <View className="flex-row justify-between items-center">
                <Text className="text-lg font-bold text-gray-700">
                  Recent Transactions
                </Text>
                <TouchableOpacity>
                  <Text className="text-purple-500 font-bold">See All</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <View className="bg-white px-6 py-4 mx-8 mt-4 rounded-lg flex-row justify-between items-center shadow-sm">
            <View>
              <Text className="text-gray-700 font-bold">{item.type}</Text>
              <Text className="text-gray-400 text-sm">{item.date}</Text>
            </View>
            <Text className="text-green-500 font-bold">{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Account;
