import { View, Text, StyleSheet } from "react-native";


export default function RestaurantsScreen() {
  return (
    <View style={styles.container}>
      <Text>Restaurants</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
