import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./src/components/CustomButton";
import CustomHeader from "./src/components/CustomHeader";
import { Colors } from "./src/constants/Theme";
import CustomInput from "./src/components/CustomInput";
import { useState } from "react";
import RootNavigator from "./src/navigation/RootNavigator";
export default function App() {
  return (
   <RootNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
    alignItems: "center",
  },
});
