import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, TextInput, } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const EventRegistrasion = ({navigation}) => {
    return (

        <View>
            <View style={styles.nav}>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onpress={true}  onPress={() => navigation.navigate('Home')}>
                    <Image source={require("../assets/images/panah2.png")} style={{ width: 20, height: 20, marginLeft: 13, marginBottom: 10, }} />
                    <Text style={{ fontSize: 18, }}> Back </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.judul}>
                <Text style={{ fontSize: 32, fontWeight: "bold" }}>SOLOIST FESTIVAL</Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 10, }}>
                <Image style={styles.foto} source={require("../assets/images/fotoregis.png")} />
            </View>

            <View style={{ marginLeft: 25, marginTop: 30, }}>
                <Text style={{}}>HTM : FREE</Text>
                <Text style={{ marginTop: 10 }}>Date : Minggu, 30 Mei 2023</Text>
                <Text style={{ marginTop: 10 }}>Location : Gedung Lama, IBI Kesatuan</Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={{ marginLeft: 25, }}>Name</Text>
            </View>
            <View style={{ marginLeft: 25, marginTop: 5 }}>
                <TextInput placeholder="" style={styles.textname}></TextInput>
            </View>


            <View style={{ flexDirection: "row" }}>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ marginLeft: 25, }}>Phone Number</Text>
                    <View style={{ marginLeft: 25, marginTop: 5 }}>
                        <TextInput placeholder="xxxx xxxx xxxx" style={styles.textnumber}></TextInput>
                    </View>
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ marginLeft: 25, }}>A Mount of Ticket</Text>
                    <View style={{ marginLeft: 25, marginTop: 5 }}>
                        <TextInput placeholder="xxxx xxxx xxxx" style={styles.textnumber}></TextInput>
                    </View>
                </View>
            </View>

            <View>
                <Text style={{ marginLeft: 300, marginTop: 10, }}>Rp 0.-</Text>
            </View>

            <View style={{marginLeft:80, marginTop:30,}}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NotifRegistrasion')}>
                    <Text style={styles.buttonText}>BOOK</Text>
                </TouchableOpacity>
            </View>





        </View>
    );
}

const styles = StyleSheet.create({


    nav: {
        flex: 1,
        justifyContent: "center",
        marginTop: 50,
        // backgroundColor: "red",
    },

    judul: {
        fontWeight: "bold",
        marginTop: 5,
        marginLeft: 1,
        marginLeft: 25,
    },

    foto: {
        marginTop: 10,
        alignItems: "center",
        width: 350,
        height: 158,
    },
    textname: {
        borderWidth: 1,
        // color: "blue",
        width: 300,
        height: 50,
        padding: 5,
        borderRadius: 10,
    },
    textnumber: {
        borderWidth: 1,
        // color: "blue",
        width: 147,
        height: 58,
        padding: 5,
        borderRadius: 10,
    },
    button: {
        backgroundColor: "#31308B",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: 200,
       
        
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft:60,
    },





})

export default EventRegistrasion;