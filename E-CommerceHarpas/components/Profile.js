import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, TextInput, } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = ({navigation}) => {
    return (
        <SafeAreaView style={{ alignItems: "center", flex:1, marginTop:20 }}>


            <View style={styles.judul}>
                <View style={{width:40, }}>
                    <Text></Text>
                </View>
                <Text style={{ fontSize: 40, fontWeight: "bold" }}>PROFILE</Text>
                <TouchableOpacity onpress={true} onPress={() => navigation.navigate('Profile2')}>
                <Image style={styles.pengaturan} source={require("../assets/images/settings.png")} />
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: "center", marginTop: 10, }}>
                <Image style={styles.emot} source={require("../assets/images/emot4.png")} />
            </View>

                <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10, marginBottom: 30, }}>Shepilla Dirja</Text>

            <View style={styles.box1}>
                <TouchableOpacity style={styles.panah} onpress={true}  onPress={() => navigation.navigate('TransactionHistory')} >
                <Text style={{ fontSize: 22 }}>Transaction History</Text>
                    <Image source={require('../assets/images/panah.png')} style={{ width: 20, height: 25, }} />
                </TouchableOpacity>

            </View>
            <View style={styles.box1}>
                <TouchableOpacity style={styles.panah}  onPress={() => navigation.navigate('ShopingCart')}>
                <Text style={{ fontSize: 22 }}>Our Services</Text>
                    <Image source={require('../assets/images/panah.png')} style={{ width: 20, height: 25, }}  />
                </TouchableOpacity>

            </View>
            <View style={styles.box1}>
                <TouchableOpacity style={styles.panah} onpress={true} onPress={() => navigation.navigate('ContactUs')}>
                <Text style={{ fontSize: 22 }}>Contact Us</Text>
                    <Image source={require('../assets/images/panah.png')} style={{ width: 20, height: 25, }} />
                </TouchableOpacity>

            </View>
            <View style={styles.box1}>
                <TouchableOpacity style={styles.panah} onpress={true}  onPress={() => navigation.navigate('PrivacyPolicy')}>
                <Text style={{ fontSize: 22 }}>Privacy & Policy</Text>
                    <Image source={require('../assets/images/panah.png')} style={{ width: 20, height: 25, }} />
                </TouchableOpacity>

            </View>



        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    judul: {
        fontWeight: "bold",
        marginTop: 5,
        alignItems: "center",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        padding:10,
    },

    container: {
        flex: 1,
    },
    pengaturan: {
        width: 30,
        height: 30,
        marginRight: 10,
        

    },
    emot: {
        marginTop: 10,
        alignItems: "center",
        width: 150,
        height: 150,
    },
    box1: {
        width: 350,
        height: 58,
        padding: 15,
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 10,
        borderRadius: 10,
    },
    panah:{
        flexDirection: "row",  
        justifyContent: "space-between",
    },


});

export default Profile;
