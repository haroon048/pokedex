import { Stack } from "expo-router";

export default function FavoritesStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0f172a",
        },
        headerTintColor: "#f8fafc",
        headerTitleStyle: {
          fontWeight: "700",
        },
      }}
    />
  );
}