import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

import HomeScreen from "@/app/(tabs)/index"; // Adjust this import path if your HomeScreen is in a subfolder
import InsightsScreen from "@/app/(tabs)/insights";
import SavingsScreen from "@/app/(tabs)/savings";
import AccountScreen from "@/app/(tabs)/account";

// Create the Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function TabsLayout() {
  const colorScheme = useColorScheme() || "light"; // Default to 'light' if colorScheme is null or undefined

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: { height: 60, paddingBottom: 8 },
        headerShown: false, // Hides the header for all screens in the tab navigator
      }}
    >
      {/* Home Tab */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />

      {/* Insights Tab */}
      <Tab.Screen
        name="Insights"
        component={InsightsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="line-chart" size={size} color={color} />
          ),
          tabBarLabel: "Insights",
        }}
      />

      {/* Savings Tab */}
      <Tab.Screen
        name="Savings"
        component={SavingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="money" size={size} color={color} />
          ),
          tabBarLabel: "Savings",
        }}
      />

      {/* Account Tab */}
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
          tabBarLabel: "Account",
        }}
      />
    </Tab.Navigator>
  );
}
