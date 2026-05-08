import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function FavoritesDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Pokémon Details</Text>
      <Text style={styles.subtitle}>ID: {id}</Text>
      <Text style={styles.body}>
        This is the details screen for your favorite Pokémon. Add the data and layout here later.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#f8fafc",
    marginBottom: 14,
  },
  subtitle: {
    fontSize: 18,
    color: "#94a3b8",
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: "#cbd5e1",
  },
});