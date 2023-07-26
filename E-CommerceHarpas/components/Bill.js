import React from "react";
import { SafeAreaView, Text, View, Image, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Bill = () => {
  return (
    <SafeAreaView style={{ marginTop: 80 }}>
      <View style={{ flexDirection: "row", borderRightWidth: 0, justifyContent: "space-between", paddingHorizontal: 15 }}>
        <Image style={{ width: 50, height: 50 }} source={require("../assets/images/LogoHarpas.png")} />
        <Text style={{ marginTop: 14, fontSize: 15 }}>Order F-234564321</Text>
      </View>

      <View style={{ paddingHorizontal: 15, marginTop: 30 }}>
        <View style={{ borderBottomWidth: 1, borderTopWidth: 1, paddingBottom: 10 }}>
          <View style={{ borderLeftWidth: 0, borderRightWidth: 0, borderColor: "black" }}>
            <Text style={{ marginTop: 10, fontSize: 15 }}>Detail Pemesanan</Text>
            <View style={{ marginTop: 30, flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ fontSize: 15 }}>Services</Text>
              <Text style={{ fontSize: 15 }}>Amount</Text>
            </View>

            <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Band Tianglala</Text>
              <Text style={{ fontSize: 15 }}>x1</Text>
            </View>
            <Text style={{ fontSize: 12, color: "grey" }}>Date : Friday, 12 July 2023</Text>
          </View>
        </View>

        <View>
          <Text style={{ marginTop: 10, fontSize: 15 }}>Detail Pembayaran</Text>
          <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Price</Text>
            <Text style={{ fontSize: 15 }}>Rp150.000</Text>
          </View>

          <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Tax (10%) </Text>
            <Text style={{ fontSize: 15 }}>Rp15.000</Text>
          </View>

          <View style={{ justifyContent: "space-between", borderTopWidth: 1, borderBottomWidth: 1, flexDirection: "row", marginVertical: 10, paddingVertical: 10 }}>
            <Text>Total</Text>
            <Text>Rp165.000</Text>
          </View>

          <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <Text>Status</Text>
            <Text>Transaction Succesfully</Text>
          </View>
        </View>

        <View style={{ marginLeft: 80, marginTop: 120 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Download Bill</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#31308B",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: 200,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 30,
  },
});

export default Bill;
