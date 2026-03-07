import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomHeader from "../components/CustomHeader";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ResetPin3() {
  return (
    <View style={{ justifyContent: "center" }}>
      <CustomHeader title="Password Reset" />

      <Image
        source={require("../assets/images/successfulreset.png")}
        style={{
          width: 300,
          height: 350,
          alignSelf: "center",
          marginTop: "70%",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
