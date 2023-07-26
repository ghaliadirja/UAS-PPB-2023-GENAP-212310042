import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, TextInput, } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile2 = ({navigation}) => {
    const handleSignIn = () => {
    // Logika untuk memproses pendaftaran pengguna
     console.log("berhasil di save:", email, password);
    };


    return (
        <SafeAreaView style={{  }}>

            <View style={styles.nav}>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => navigation.navigate('Profile')} >
                    <Image source={require("../assets/images/panah2.png")} style={{ width: 20, height: 20, marginLeft:13,}} />
                    <Text style={{ fontSize: 18,}}> Back </Text>
                </TouchableOpacity>
            </View>


            <View style={styles.judul}>
                <Text style={{ fontSize: 40, fontWeight: "bold" }}>PROFILE</Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 10, }}>
                <Image style={styles.emot} source={require("../assets/images/emot4.png")} />
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={{ marginLeft: 48,  }}>Username</Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 5 }}>
                <TextInput placeholder="" style={styles.textemail}></TextInput>
            </View>

            <View style={{ marginTop: 10 }}>
                <Text style={{ marginLeft: 48,  }}>Name</Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 5 }}>
                <TextInput placeholder="" style={styles.textemail}></TextInput>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={{ marginLeft: 48,  }}>Email</Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 5 }}>
                <TextInput placeholder="" style={styles.textemail}></TextInput>
            </View>

            <View style={{ marginTop: 10 }}>
                <Text style={{ marginLeft: 48,  }}>Address</Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 5 }}>
                <TextInput placeholder="" style={styles.textemail}></TextInput>
            </View>

            <View style={{ alignItems: "center" }}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    nav: {
        flex: 1,
        justifyContent: "center",
        marginTop:10,
        // backgroundColor: "red",

    },

    judul: {
        fontWeight: "bold",
        marginTop: 5,
        alignItems: "center",

    },
    emot: {
        marginTop: 10,
        alignItems: "center",
        width: 150,
        height: 150,
    },
    textemail: {
        borderWidth: 1,
        // color: "blue",
        width: 300,
        height: 50,
        padding: 5,
        borderRadius: 10,
    },
    button: {
        backgroundColor: "#31308B",
        // paddingVertical: 10,
        // paddingHorizontal: 20,
        borderRadius: 50,
        width: 282,
        height:58,
        marginTop: 30,
        alignItems:"center",
        justifyContent:"center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        
        
    },

})

export default Profile2;
