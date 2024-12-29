import { View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function AuthenticationScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Přihlášení" onPress={() => router.push("/(authentication)/login")} />
      <Button title="Registrace" onPress={() => router.push("/(authentication)/registration")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
    padding: 16,
    backgroundColor: "#fff",
  },
});