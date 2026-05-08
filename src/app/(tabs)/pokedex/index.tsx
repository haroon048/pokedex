import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PokedexScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>
      <Text style={styles.description}>
        Tap a Pokémon to see its details, or use the search to find your favorites.
      </Text>
      <Pressable
        style={styles.card}
        onPress={() => router.push({ pathname: "/pokedex/[id]", params: { id: "1" } })}
      >
        <Text style={styles.cardTitle}>Bulbasaur</Text>
        <Text style={styles.cardSubtitle}>Grass / Poison</Text>
      </Pressable>
      <Pressable
        style={styles.testButton}
        onPress={() => router.push({ pathname: "/pokedex/[id]", params: { id: "25" } })}
      >
        <Text style={styles.testButtonText}>Test Navigation to Pikachu</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 20,
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
  card: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 20,
    padding: 20,
    borderColor: "rgba(148, 163, 184, 0.2)",
    borderWidth: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#f8fafc",
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#94a3b8",
  },
  testButton: {
    backgroundColor: "#3b82f6",
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
