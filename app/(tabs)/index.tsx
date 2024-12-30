import {useState} from 'react';
import { View, Text, StyleSheet,SafeAreaView,FlatList,Image,TextInput } from "react-native";
import { Searchbar } from "react-native-paper";

import { mockRestaurants } from "../../data/restaurants";



export default function RestaurantsScreen() {
 
 
  return (
    <SafeAreaView style={styles.container}>
      <Searchbar placeholder="Search here..."
        value={""}
        onChangeText={(text) => null}
        onSubmitEditing={() => null} />
        
       <FlatList
        data={mockRestaurants}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.address}>{item.address}</Text>
              <Text style={styles.rating}>⭐ {item.rating}</Text>
              <Text style={styles.status}>
                {item.isOpenNow ? "Open Now" : "Closed"}
              </Text>
            </View>
            </View>
        )}
        keyExtractor={(item) => item.name}
      />
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
  },
  info:{
    padding: 8,
    flex: 1,
    justifyContent: "center",
  },
  name:{
    fontSize: 16,
    fontWeight: "bold",
  },
  address: {
    color: "#666",
    marginTop: 4,
  },
  rating: {
    marginTop: 4,
    color: "#f39c12",
  },
  status: {
    marginTop: 4,
    color: "#27ae60",
  },
});
