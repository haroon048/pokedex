import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#f8fafc",
        tabBarInactiveTintColor: "#cbd5e1",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginBottom: 4,
        },
        tabBarIconStyle: {
          marginBottom: 4,
        },
        tabBarStyle: {
          position: "absolute",
          left: 16,
          right: 16,
          bottom: 12,
          elevation: 12,
          backgroundColor: "rgba(15, 23, 42, 0.78)",
          borderTopColor: "rgba(148, 163, 184, 0.18)",
          borderTopWidth: 1,
          borderRadius: 28,
          height: 72,
          paddingBottom: 10,
          paddingTop: 8,
          shadowColor: "#0f172a",
          shadowOpacity: 0.25,
          shadowRadius: 18,
          shadowOffset: {
            width: 0,
            height: 10,
          },
        },
        tabBarItemStyle: {
          borderRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="pokedex"
        options={{
          title: "Pokedex",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
