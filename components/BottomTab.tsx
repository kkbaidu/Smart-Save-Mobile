import { View, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

const BottomTab = () => {
  const router = useRouter();

  return (
    <View className="flex-row justify-around items-center bg-gray-100 py-4 rounded-t-lg">
      <TouchableOpacity
        className="items-center"
        onPress={() => router.push("/")}
      >
        <Text className="text-blue-500">🏠</Text>
        <Text className="text-gray-500 text-xs">Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center"
        onPress={() => router.push("/insights")}
      >
        <Text className="text-gray-500">📊</Text>
        <Text className="text-gray-500 text-xs">Insights</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center"
        onPress={() => router.push("/savings")}
      >
        <Text className="text-gray-500">💰</Text>
        <Text className="text-gray-500 text-xs">Savings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center"
        onPress={() => router.push("/account")}
      >
        <Text className="text-gray-500">👤</Text>
        <Text className="text-gray-500 text-xs">Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;
