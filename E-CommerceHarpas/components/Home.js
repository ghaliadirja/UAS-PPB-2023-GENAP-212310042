import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { SafeAreaView } from 'react-native';

const Home = ({navigation, route}) => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.container2}>
                <View style={{ flexDirection: "column" }}>
                    <Text style={{ fontSize: 25, }}>HI</Text>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Shepilla</Text>
                </View>
                <Image style={styles.emot} source={require("../assets/images/emot4.png")} />
            </View>

            <Image style={styles.emot2} source={require("../assets/images/emot2.jpeg")} />
            <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 10, marginBottom: 10, }}>New Event</Text>

            <View style={styles.menu}>
                <View style={styles.menu2}>
                    <Image style={styles.emot3} source={require("../assets/images/emot3.jpeg")} />
                </View>

                <View style={{justifyContent:"space-between", padding:10}}>
                    <View >
                    <Text style={{ color: "#4D0A8E", fontWeight: "bold", fontSize: 25, }}>Jazz Festival</Text>
                    <Text style={{ color: "#4D0A8E", fontSize: 15, marginTop: 5, }}>with : bianglala band</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent:"space-between", marginTop:30}}>
                        <Text style={{ color: "#DB1717", fontSize: 20, fontWeight: "bold" }}>Free Htm</Text>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EventRegistrasion')}>
                            <Text style={styles.buttonText}>JOIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        marginLeft:20,
        marginTop:50,
    },
    container2: {

        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    emot: {
        width: 50,
        height: 50,
        marginRight:20,
        // marginLeft:5,
    },
    emot2: {
        marginTop: 20,
        alignItems: "center",
        width: 350,
        height: 157,
    },
    menu: {
        width: 250,
        height: 300,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    menu2: {
        borderRadius: 10,
        width: 250,
        height: 150,
    },
    emot3: {
        borderRadius: 10,
        width: 250,
        height: 150,
    },
    button: {
        backgroundColor: "#31308B",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: 100,
    },

    buttonText: {
        color: "#fff",
        fontSize: 10,
        fontWeight: "bold",
        textAlign: "center",
    },
})

export default Home;