import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme";

import HomeScreen from "@/app/(tabs)/index";
import InsightsScreen from "@/app/(tabs)/insights";
import SavingsScreen from "@/app/(tabs)/savings";
import AccountScreen from "@/app/(tabs)/account";

const Tab = createBottomTabNavigator();

export default function TabsLayout() {
  const colorScheme = useColorScheme() || "light"; // Default to 'light' if no color scheme is available

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#f3f4f6",
          height: 60,
          paddingBottom: 8,
          marginHorizontal: 16, // Add horizontal margins
          marginBottom: 10,
          borderRadius: 20, // Round the sides
          position: "absolute", // Ensure it's positioned correctly
          borderWidth: 1,
          borderColor: "#e5e7eb", // Optional: Add a subtle border
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 5, // For Android shadow
        },
        tabBarActiveTintColor: "#3b82f6",
        tabBarInactiveTintColor: "#9ca3af",
        headerShown: false,

        // Custom tabBarIcon for each tab
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Insights":
              iconName = "line-chart";
              break;
            case "Savings":
              iconName = "money";
              break;
            case "Account":
              iconName = "user";
              break;
            default:
              iconName = "circle";
          }

          return (
            <FontAwesome
              name={iconName as keyof typeof FontAwesome.glyphMap}
              size={size}
              color={focused ? "#3b82f6" : color}
            />
          );
        },
      })}
    >
      {/* Home Tab */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: "Home" }}
      />

      {/* Insights Tab */}
      <Tab.Screen
        name="Insights"
        component={InsightsScreen}
        options={{ tabBarLabel: "Insights" }}
      />

      {/* Savings Tab */}
      <Tab.Screen
        name="Savings"
        component={SavingsScreen}
        options={{ tabBarLabel: "Savings" }}
      />

      {/* Account Tab */}
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{ tabBarLabel: "Account" }}
      />
    </Tab.Navigator>
  );
}
