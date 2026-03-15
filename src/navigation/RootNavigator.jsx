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
import ResetPin3 from "../screens/ResetPin3";
import About from "../screens/About";
import ResetPassword1 from "../screens/ResetPassword1";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import Facial from "../screens/Facial";
import Personal from "../screens/Personal";
import VerifyCode from "../screens/VerifyCode1";
import ResetPassword from "../screens/ResetPassword1";
import ResetPassword2 from "../screens/Resetpassword2";
import ResetPassword3 from "../screens/ResetPassword3";
import Settings1 from "../screens/Settings1";
import Settings2 from "../screens/Settings2";
import Payment from "../screens/Payment";
import Alert from '../pages/Alert';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    return (
      <NavigationIndependentTree>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="BottomTab"
              component={BottomTab}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Alert" component={Alert}/>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="IntroScreen1" component={IntroScreen1} />
            <Stack.Screen name="IntroScreen2" component={IntroScreen2} />
            <Stack.Screen name="VerifyCode" component={VerifyCode} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="ResetPassword2" component={ResetPassword2} />
             <Stack.Screen name="ResetPassword3" component={ResetPassword3} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings1" component={Settings1} />
            <Stack.Screen name="Settings2" component={Settings2} />
            <Stack.Screen name="Payment" component={Payment}/>
            <Stack.Screen name='Personal' component={Personal}/>
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
      <Tab.Screen name="personal" component={personal} />
    </Tab.Navigator>
  );
}
