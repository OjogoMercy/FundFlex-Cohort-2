import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationIndependentTree } from "@react-navigation/native";
import HomeScreen from "../screens/Bottomtab/HomeScreen";
import Chart from "../screens/Bottomtab/Chart";
import Settings from "../screens/Bottomtab/Settings";
import Wallet from "../screens/Bottomtab/Wallet";
import Send from "../pages/Send";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    return (
        
      <NavigationIndependentTree>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Send" screenOptions={{headerShown: false}}>
                    
            <Stack.Screen
              name="BottomTab"
              component={BottomTab}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Send" component={Send}/>
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
