import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, TextInput, } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const CommunityInfo = (navigation) => {
    return (
        <SafeAreaView style={{marginTop:50}}>

            <View style={styles.nav}>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => navigation.navigate('Profile')}>
                    <Image source={require("../assets/images/panah2.png")} style={{ width: 20, height: 20, marginLeft: 13, marginBottom: 10, }} />
                    <Text style={{ fontSize: 18, }}> Back </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.judul}>
                <Text style={{ fontSize: 32, fontWeight: "bold" }}>HARPAS KESATUAN</Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 10, }}>
                <Image style={styles.foto} source={require("../assets/images/fotoharpas.png")} />
            </View>

            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10, marginBottom: 10, marginLeft: 20, }}>History</Text>
            <Text style={{ marginTop: 5, marginLeft: 20 }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </Text>

            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10, marginBottom: 10, marginLeft: 20, }}>Vision & Mission</Text>
            <Text style={{ marginTop: 5, marginLeft: 20 }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </Text>

            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10, marginBottom: 10, marginLeft: 20, }}>Our Team</Text>

            <View style={{flexDirection: "row", justifyContent:"space-between" }}>
                <View>
                    <Image source={require("../assets/images/ketua.png")} style={{ width: 80, height: 80, marginLeft: 13, marginBottom: 10, }} />
                    <Text style={{ fontWeight:"bold", fontSize:18, marginLeft: 20}} >Ketua</Text>
                    <Text style={{ fontSize:15,marginTop: 5, marginLeft: 20,  }}>Bagas Ferdi</Text>
                </View>

                <View>
                    <Image source={require("../assets/images/ketua.png")} style={{ width: 80, height: 80, marginLeft: 13, marginBottom: 10, }} />
                    <Text style={{ fontWeight:"bold", fontSize:18, marginLeft: 20}} >Wakil Ketua</Text>
                    <Text style={{ fontSize:15,marginTop: 5, marginLeft: 20, }}>Bagas Ferdi</Text>
                </View>

                <View>
                    <Image source={require("../assets/images/ketua.png")} style={{ width: 80, height: 80, marginLeft: 13, marginBottom: 10, }} />
                    <Text style={{ fontWeight:"bold", fontSize:18, marginLeft: 20}}>Bendahara</Text>
                    <Text style={{ fontSize:15,marginTop: 5, marginLeft: 20, }}>Bagas Ferdi</Text>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    nav: {
        flex: 1,
        justifyContent: "center",
        marginTop: 10,
        // backgroundColor: "red",

    },

    judul: {
        fontWeight: "bold",
        marginTop: 5,
        alignItems: "center",

    },

    foto: {
        marginTop: 10,
        alignItems: "center",
        width: 350,
        height: 148,
    },
})

export default CommunityInfo;
