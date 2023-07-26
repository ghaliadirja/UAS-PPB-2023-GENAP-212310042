import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, TextInput, } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const TransactionHistory = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>

            <Image source={require('../assets/images/image-sampah.png')}
                style={styles.gambarIcon} />
            <View>
                <Text style={{
                    fontSize: 15, fontWeight: "bold", alignItems: "center", textAlign: "center", color: "#31308B", marginTop:20,
                }}
                >Unfortunately,  any history can’t found yet</Text>
            </View>

            <View style={styles.bawah}>
                <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
                    <Text style={{ color: "#31308B" }}>go to Event - </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({

    container:{
        marginTop:30,

    },

    gambarIcon: {
        width: 356,
        height: 356,
        marginTop: 20,
        marginLeft:20,
        alignItems: "center",
        justifyContent: "center",
        
    },

    bawah: {
        textAlign: "right",
        marginTop: 150,
        marginLeft:300,

    },

})

export default TransactionHistory;
