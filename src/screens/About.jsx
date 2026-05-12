import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import CustomHeader from "../components/CustomHeader";

export default function About() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: "center" }}>
        <CustomHeader title="About" />



        <Image
          source={require("../assets/images/about1.png")}
          style={{
            width: 350,
            height: 320,
            alignSelf: "center",
            marginTop: "25%",
          }}
        />
      </View>

      <View
        style={{
          borderWidth: 1,
          marginHorizontal: 20,
          marginTop: 10,
          marginBottom: 20,
        }}
      ></View>

      <View style={{ marginHorizontal: 20 }}>
        <Text
          style={{
            textAlign: "left",
            fontSize: 20,
            color: "#000000",
            fontWeight: "400",
            lineHeight: 22,
            marginBottom: 5,
          }}
        >
          Our Mission
        </Text>
        <Text style={{ textAlign: "left", fontSize: 15, lineHeight: 25 }}>
          To make personal finance simple, accesible and powerful for everyone -
          no matter your income or experience
        </Text>
      </View>

      <View
        style={{
          borderWidth: 1,
          marginHorizontal: 20,
          marginTop: 10,
          marginBottom: 20,
        }}
      ></View>
      <View style={{ marginHorizontal: 20 }}>
        <Text
          style={{
            textAlign: "left",
            fontSize: 20,
            color: "#000000",
            fontWeight: "400",
            lineHeight: 22,
            marginBottom: 5,
          }}
        >
          Our Vision
        </Text>
        <Text style={{ textAlign: "left", fontSize: 15, lineHeight: 25 }}>
         A finacially iliterate generation making smarter and stress free money decisions everyday. 
        </Text>

         <View
        style={{
          borderWidth: 1,
          marginHorizontal: 20,
          marginTop: 10,
          marginBottom: 20,
        }}
      ></View>
    
        <Text style={{ textAlign: "center", fontSize: 15, lineHeight: 25 }}>
         wheather you are saving for a goal, tracking your spending or handling payments - FundFlex gives you the tools to flex your finaces.
        </Text>
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({});
