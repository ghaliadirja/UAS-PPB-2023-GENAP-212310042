import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, TextInput, } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const PrivacyPolicy = ({navigation}) => {
    return (
        <View>
            <View style={styles.judul}>
                <Text style={{ fontSize: 32, fontWeight: "bold", marginLeft:70, }}>Privacy & Policy</Text>
            </View>

            <View style={{ marginTop: 10,  }}>
                <Text style={{  marginTop: 10, textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget iaculis diam, vel pellentesque mauris. Sed tellus est, semper quis laoreet eget, porta in nunc. Curabitur condimentum posuere ipsum eu venenatis. Maecenas justo urna, suscipit ullamcorper placerat vel, viverra et justo. In hac habitasse platea dictumst. Integer sit amet condimentum augue. Nunc sollicitudin sodales convallis. Phasellus gravida turpis vitae sapien porta, eu egestas diam pretium. Aenean posuere nisl vitae felis ultrices semper. Donec eu neque id magna fringilla sodales. Quisque et lorem eros. Morbi luctus arcu in odio elementum pharetra.
                    Duis fri    ngilla facilisis auctor. Praesent vitae nisl eget felis consequat faucibus ut in elit. Sed quis arcu diam.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi a elit vel neque porta feugiat. Fusce mattis eu massa nec tincidunt. Pellentesque nec augue bibendum, tempor quam nec, malesuada nisl. Suspendisse finibus dolor in rutrum dapibus. Vestibulum erat ex, ultrices eu lobortis vitae, egestas a lorem. Donec eleifend malesuada tortor, non viverra tellus. Ut sit amet nisl in risus ultrices pharetra. Proin diam justo, elementum eu tristique id, hendrerit et ex. Duis massa tortor, venenatis eu placerat sed, ultricies eget sapien. Aliquam cursus dignissim tellus. Etiam scelerisque venenatis nisi eget condimentum. Sed vitae diam nec odio auctor luctus vitae sit amet magna.</Text>
            </View>

            <View style={{marginLeft:80, marginTop:30,}}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>ACCEPT ALL</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    judul: {
        fontWeight: "bold",
        borderBottomWidth: 1,
        marginTop: 30,
        textAlign: "center",
        
    },
    button: {
        backgroundColor: "#31308B",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: 200,
        marginLeft:10,
       
        
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft:35,
    },

})

export default PrivacyPolicy;