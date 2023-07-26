import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, TextInput, } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const EventVideos = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.container2}>
                <View style={{ flexDirection: "column" }}>
                    <Text style={{ fontSize: 25, marginBottom: 5, }}>Find Your</Text>
                    <Text style={{ fontSize: 30, fontWeight: "bold", color: "#1C0235", }}>Impressive Event</Text>
                </View>
            </View>

            <View style={styles.search2}>
                <Image source={require("../assets/images/search.png")} style={{ width: 20, height: 20, marginLeft: 10, }} />
                <TextInput placeholder="Search the event you’re looking for" style={styles.search}></TextInput>
            </View>

            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10, marginBottom: 10, color: "#1C0235" }}>New Event</Text>

            <View style={{ borderBottomWidth: 1, flexDirection: "row", }}>
                <Image source={require("../assets/images/logo-event.png")} style={{ width: 128, height: 140, marginBottom: 5, marginRight:8}} />

                <View style={{ flexDirection: "column", }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18, marginLeft: 10, marginBottom: 5, }}>Event Name</Text>
                    <Text style={{ fontSize: 13, marginLeft: 10, width: 100, marginBottom: 5, }}>Short Description - Lorem ipsum dolor sit amet, consectet.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EventRegistrasion')}>
                        <Text style={styles.buttonText}>Join Now</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10, marginBottom: 5, color: "#1C0235" }}>Last Event Documentation</Text>


            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.navigate('EventPhotos')}>

                <Text style={{ fontSize: 20, marginTop: 2, marginBottom: 10, color: "1C0235" }}>Photos</Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 20, marginTop: 2, marginBottom: 10, marginLeft: 10, color: "#4D0A8E" }}>Videos</Text>
            </View>

            <View>
                <Image source={require("../assets/images/videos1.png")} style={{ width: 350, height: 160, marginBottom: 5, }} />
                <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 2, marginBottom: 10, marginLeft: 55, color: "#4D0A8E", marginLeft:70 }}>Harpas For The Gigs</Text>
            </View>




        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 5,
        marginLeft: 20,
        marginTop:20,
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
        marginLeft: 5
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
        paddingLeft: 10,
    },

    buttonText: {
        color: "#ffff",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        
    },

})

export default EventVideos;