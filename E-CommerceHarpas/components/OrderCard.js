import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const OrderCard = ({ title, description, price, imageUrl, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.cardContent}>
        <View style={styles.imageContainer}>
          <Icon name="shopping-cart" size={30} color="#1C0235" />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.price}>{price}</Text>
          <TouchableOpacity style={styles.addButton} onPress={onPress}>
            <Text style={styles.addButtonText}>+ </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#ccc",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    flex: 1,
    flexDirection: "column",
  },
  imageContainer: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1C0235",
  },
  description: {
    fontSize: 14,
    color: "#888",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#DB1717",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addButton: {
    backgroundColor: "#DB1717",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
    width: 40,
    marginTop: 5,
    alignSelf: "flex-end",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default OrderCard;
