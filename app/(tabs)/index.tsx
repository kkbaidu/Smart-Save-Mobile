import { router } from "expo-router";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <View className="fixed bg-[#fff] top-0 flex-row justify-between items-center py-4 px-7">
        <Image
          source={require("@/assets/images/smart-save-logo.png")}
          className="w-[45%] h-10 -ml-3"
          resizeMode="contain"
        />

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

      <ScrollView className="flex-1 bg-white px-12">
        {/* Header */}
        <Text className="font-semibold w-30">Welcome back, Mary!</Text>
        <View className="flex justify-center items-center w-full px-24 my-8">
          <Image
            source={require("@/assets/images/vector-arrows.png")}
            className="w-full h-[10rem]"
            resizeMode="contain"
          />
        </View>

        {/* Financial Overview */}
        <View className="flex-1 items-center justify-start">
          <View className="mb-4">
            <View className="flex flex-row font-extrabold text-center">
              <Text className="text-blue-500 text-[35px] font-semibold tracking-wider">
                Unlock
              </Text>
              <Text className="text-[35px] font-nomal tracking-wider">
                {" "}
                Your
              </Text>
            </View>
            <Text className="text-[35px] font-nomal text-center tracking-wider">
              Financial
            </Text>
            <Text className="text-[35px] font-nomal text-center tracking-wider">
              Future.
            </Text>
          </View>

          {/* Savings Card */}
          <View className="flex flex-col flex-start bg-[#2D79C0] rounded-xl h-[120px] p-6 w-full items-start mb-4">
            <Text className="text-white text-4xl font-bold">₵ 2,900.00</Text>
            <Text className="text-white">Total savings</Text>
          </View>

          {/* Income and Expenses */}
          <View className="flex-row justify-between w-full mb-4">
            <View className="flex flex-row items-center rounded-md p-4 w-[45%]">
              <Text className="text-white bg-[#61AFFD] h-10 text-2xl text-center w-12 font-bold">
                ⬆
              </Text>
              <View className="mx-1">
                <Text className="text-gray-700 text-sm">Income</Text>
                <Text className="text-gray-700 font-black">₵4500</Text>
              </View>
            </View>
            <View className="flex flex-row items-center rounded-md p-4 w-[45%]">
              <Text className="text-white bg-[#DA3C42] h-10 text-2xl text-center w-12 font-bold">
                ⬇
              </Text>
              <View className="mx-1">
                <Text className="text-gray-700 text-sm">Expenses</Text>
                <Text className="text-gray-700 font-black">₵2000</Text>
              </View>
            </View>
          </View>

          {/* Goals Button */}
          <TouchableOpacity
            className="bg-blue-500 rounded-xl p-4 w-52 flex-row justify-center items-center mb-24"
            onPress={() => router.push("/saving-goals")}
          >
            <Text className="text-white font-bold mr-2">GOALS</Text>
            <Image
              source={require("@/assets/images/arrow-right.png")}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
