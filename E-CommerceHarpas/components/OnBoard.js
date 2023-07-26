import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';

const OnBoard = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: 'white', justifyContent: "center" }}>
            <View style={styles.Judul}>
                <Text style={{ fontSize: 30 }}>Find a new experience</Text>
                <Text style={{ fontSize: 15 }}>we will talk about art, dance, fotography,
                    cinematography, etc...</Text>
            </View>
            <Image source={require('../assets/images/pinguin.jpeg')}
                style={styles.gambarIcon} />

            <TouchableOpacity style={styles.button} onPress={()  => navigation.navigate('SignIn')}>
                <Text style={styles.buttonText}>SigIn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.buttonText2}>SignUp</Text>
            </TouchableOpacity>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    gambarIcon: {
        width: 350,
        height: 340
    },
    Judul: {
        alignItems: "center",
        width: "80%",
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: 200,
        alignItems: "center"
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    button2: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: 200,
        marginTop: 5,
        borderWidth: 1,
        alignItems: "center",
        marginTop: 20,


    },
    buttonText2: {
        color: 'blue',
        fontSize: 16,
        fontWeight: 'bold',
    },

})

export default OnBoard;