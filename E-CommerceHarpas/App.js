import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import Splash from "./components/Splash";
import SignUp from "./components/SignUp";
import OnBoard from "./components/OnBoard";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Profile2 from "./components/Profile2";
import ContactUs from "./components/ContactUs";
import CommunityInfo from "./components/CommunityInfo";
import TransactionHistory from "./components/TransactionHistory";
import EventPhotos from "./components/EventPhotos";
import EventVideos from "./components/EventVideos";
import ShopingCart from "./components/ShopingCart";
import EventRegistrasion from "./components/EventRegistrasion";
import OrderCard from "./components/OrderCard";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotifRegistrasion from "./components/NotifRegistrasion";

import ButtonTab from "./components/Navigation/ButtonTab";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name="OnBoard" component={OnBoard} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name="ButtonTab" component={ButtonTab} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="TransactionHistory" component={TransactionHistory} options={{ headerShown: false }} />
          <Stack.Screen name="ContactUs" component={ContactUs} options={{ headerShown: false }} />
          <Stack.Screen name="CommunityInfo" component={CommunityInfo} options={{ headerShown: false }} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ headerShown: false }} />
          <Stack.Screen name="Profile2" component={Profile2} options={{ headerShown: false }} />
          <Stack.Screen name="EventVideos" component={EventVideos} options={{ headerShown: false }} />
          <Stack.Screen name="EventPhotos" component={EventPhotos} options={{ headerShown: false }} />
          <Stack.Screen name="EventRegistrasion" component={EventRegistrasion} options={{ headerShown: false }} />
          <Stack.Screen name="NotifRegistrasion" component={NotifRegistrasion} options={{ headerShown: false }} />
          <Stack.Screen name="ShopingCart" component={ShopingCart} options={{ headerShown: false }} />
          <Stack.Screen name="OrderCard" component={OrderCard} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
