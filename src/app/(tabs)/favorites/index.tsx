import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function FavoritesScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <Text style={styles.description}>
        Your favorite Pokémon will appear here once you add them.
      </Text>
      <Pressable
        style={styles.testButton}
        onPress={() => router.push({ pathname: "/favorites/[id]", params: { id: "150" } })}
      >
        <Text style={styles.testButtonText}>Test Navigation to Mewtwo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#f8fafc",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#cbd5e1",
    marginBottom: 20,
  },
  testButton: {
    backgroundColor: "#dc2626",
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
    alignItems: "center",
  },
  testButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
});
