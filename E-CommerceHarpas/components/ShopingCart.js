import React from "react";
import { SafeAreaView, Text, View, Image, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import OrderCard from "./OrderCard";
import { ScrollView } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const ShopingCart = ({ navigation }) => {
  const categories = ["All   ", "Music   ", "Fotography  ", "Art  "];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 25, marginBottom: 5 }}>Find the Best</Text>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#1C0235" }}>Services you need</Text>
        </View>
      </View>

      <View style={styles.search2}>
        <Image source={require("../assets/images/search.png")} style={{ width: 20, height: 20, marginLeft: 10 }} />
        <TextInput placeholder="Search the services you’re looking for" style={styles.search}></TextInput>
      </View>

      {/* Horizontal Category Filter */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryFilterContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryFilterItem}>
            <Text style={styles.categoryFilterText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView>
        <View>
          {/* Order Cards */}
          <OrderCard
            title="Band"
            description="Description of Service 1"
            price="150.000"
            onPress={() => {
              // Handle onPress action for Service 1
            }}
          />
          <OrderCard
            title="Choir"
            description="Description of Service 2"
            price="150.000"
            onPress={() => {
              // Handle onPress action for Service 2
            }}
          />
          <OrderCard
            title="Photographer"
            description="Description of Service 2"
            price="150.000"
            onPress={() => {
              // Handle onPress action for Service 2
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginHorizontal: 20,
    marginTop: 20,
  },

  container2: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  search: {
    borderWidth: 1,
    color: "blue",
    width: 350,
    height: 60,
    padding: 5,
    borderRadius: 10,
    borderWidth: 0,
    marginLeft: 5,
  },
  search2: {
    alignItems: "center",
    marginTop: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#31308B",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: 100,
    marginBottom: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  categoryFilterItem: {
    // ... other styles ...
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  categoryFilterText: {
    // ... other styles ...
    color: "#888",
    fontSize: 16,
  },
  selectedCategory: {
    backgroundColor: "#1C0235",
  },
  selectedCategoryText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ShopingCart;
