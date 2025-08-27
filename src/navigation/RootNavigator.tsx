import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationIndependentTree } from "@react-navigation/native";
import HomeScreen from "../screens/Bottomtab/HomeScreen";
import SignUp from "../screens/Sign-Up";
import Login from "../screens/Login";
import Chart from "../screens/Bottomtab/Chart";
import Settings from "../screens/Bottomtab/Settings";
import Wallet from "../screens/Bottomtab/Wallet";
import Profile from "../screens/Profile";
import Splash from "../screens/Splash";
import IntroScreen1 from "../screens/IntroScreen1";
import IntroScreen2 from "../screens/IntroScreen2";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    return (
        
      <NavigationIndependentTree>
        <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                    
            <Stack.Screen
              name="BottomTab"
              component={BottomTab}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="IntroScreen1" component={IntroScreen1} />
            <Stack.Screen name="IntroScreen2" component={IntroScreen2} />
          </Stack.Navigator>
        </NavigationContainer>
      </NavigationIndependentTree>
    );
}
export function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Chart" component={Chart} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
