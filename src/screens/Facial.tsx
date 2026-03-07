import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import CustomHeader from "../components/CustomHeader";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import CustomButton from "../components/CustomButton";

export default function Facial() {
  return (
    <View>
      <CustomHeader title="Facial Recognition" />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
        }}
      >
        <Text style={{ marginTop: "40%", fontSize: 18 }}>
          Secure Access With Facial Recognition
        </Text>
        <Text
          style={{
            marginBottom: "20%",
            marginTop: "2%",
            textAlign: "center",
            fontSize: 11,
          }}
        >
          Experince Fast, Secure access using advanced facial recognition
          technology
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <FontAwesome6 name="users-viewfinder" size={200} color="primary" />
      </View>

      <CustomButton
        title="Scan"
        onPress={() => console.log("=====================")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
