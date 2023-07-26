import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, TextInput, } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const NotifRegistrasion = ({navigation}) => {
    return (
        <View>

            <Image source={require('../assets/images/ceklisbook.png')}
                style={styles.gambarIcon} />
            <View>
                <Text style={styles.text}
                > Congratulation, registration successful
                Your Ticket has already send to your email address</Text>
            </View>

            <View style={styles.bawah}>
                <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
                    <Text style={{ color: "#31308B", marginLeft:250 }}> Back to HOME -- </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    gambarIcon: {
        width: 200,
        height: 200,
        marginTop: 80,
        alignItems: "center",
        marginLeft:90,
        justifyContent: "center",
        
    },

    text:{
        fontSize: 13, 
        fontWeight: "bold", 
        textAlign:"center",
        color: "#31308B",
        marginTop: 20,
    },

    bawah: {
        textAlign: "right",
        marginTop: 150,
        marginRight: 10,

    },
})

export default NotifRegistrasion;