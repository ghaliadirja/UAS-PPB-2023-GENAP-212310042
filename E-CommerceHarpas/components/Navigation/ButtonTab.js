import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventPhotos from '../../components/EventPhotos';
import Profile from '../../components/Profile';
import Scanner from '../../components/Scanner'
import Home from '../../components/Home'
import ShopingCart from '../../components/ShopingCart'

const ButtonTab = ({ navigation, route }) => {
    const Tab = createBottomTabNavigator();
    const CustomeNavBar = ({ children, onPress }) => {
        return (
            <TouchableOpacity style={{ top: -20, justifyContent: 'center', alignItems: 'center' }} onPress={onPress} >
                <View style={{ width: 62, height: 62, borderRadius: 35, backgroundColor: '#A4BE7B' }}>
                    {children}
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: [
                {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: 'white',
                    height: 65
                }
            ]
        }}>
            <Tab.Screen name='Home' component={Home} options={{
                headerShown: false, tabBarIcon: () => (
                    <Image source={require("../../assets/images/home.png")} style={{ width: 30, height: 30 }} />
                )
            }} />

            <Tab.Screen name='Event' component={EventPhotos} options={{
                headerShown: false, tabBarIcon: () => (
                    <Image source={require("../../assets/images/calendar.png")} style={{ width: 30, height: 30 }} />
                )
            }} />

            <Tab.Screen name='Scanner' component={Scanner} options={{
                headerShown: false, tabBarIcon: () => (
                    <Image source={require("../../assets/images/qr.png")} style={{ width: 30, height: 30 }} />
                )
            }} />

            <Tab.Screen name='ShopingCart' component={ShopingCart} options={{
                headerShown: false, tabBarIcon: () => (
                    <Image source={require("../../assets/images/shopping-cart.png")} style={{ width: 30, height: 30 }} />
                )
            }} />


            <Tab.Screen name='Profile' component={Profile} options={{
                headerShown: false, tabBarIcon: () => (
                    <Image source={require("../../assets/images/user.png")} style={{ width: 30, height: 30 }} />
                )
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default ButtonTab;
