import { View, Text, Image } from "react-native";

const Header = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <View className="flex-row justify-between items-center py-4">
      <View>
        <Text className="text-xl font-bold text-blue-500">{title}</Text>
        <Text className="text-gray-500">{subtitle}</Text>
      </View>
      <View className="flex-row items-center space-x-2">
        <Image
          source={{ uri: "https://via.placeholder.com/40" }}
          className="w-10 h-10 rounded-full"
        />
        <View className="bg-gray-100 p-2 rounded-full">
          <Text className="text-purple-500">🔔</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
