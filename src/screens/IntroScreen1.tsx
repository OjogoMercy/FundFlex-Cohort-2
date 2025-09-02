import { StatusBar } from "expo-status-bar";
import CustomHeader from "../components/CustomHeader";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import RootNavigator from "../navigation/RootNavigator";
import CustomButton from "../components/CustomButton";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
  SafeAreaView,
  // StatusBar,
} from "react-native";
import { Images } from "../constants/Images";
import { FONTS, Colors } from "../constants/Theme";
import { useNavigation } from "expo-router";

export default function IntroScreen1() {
  const navigation = useNavigation()
  const handleSkip = () => {
    // Handle skip action
    console.log("Skip pressed");
  };

  const handleNext = () => {
 
    console.log("Next pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.man} style={styles.img} />

      <View style={styles.gradientOverlay}>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text
              style={{
                ...FONTS.h1,
                color: Colors.white,
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              Welcome To FundFlex
            </Text>
            <Text style={styles.subtitle}>
              Your All In One App to Budget smarter, Send And Receive Money, and
              pay bills with ease - All From One Place.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <View style={{ width: "40%" }}>
              <CustomButton
                title="Skip"
                onPress={handleSkip}
                buttonStyle={{
                  backgroundColor: "transparent",
                  borderWidth: 1,
                  borderColor: "#fff",
                }}

              />
            </View>

            <View style={{ width: "40%" }}>
              <CustomButton title="Next" onPress={() => navigation.navigate('IntroScreen2')} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  img: {
    width: "100%",
    height: "50%",
  },
  gradientOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "60%",
    // paddingTop: 20,
    justifyContent: "flex-end",
    backgroundColor: "rgba(45, 67, 121, 0.95)",
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  textContainer: {
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
    lineHeight: 24,
    opacity: 0.9,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  skipButton: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    backgroundColor: "transparent",
    alignItems: "center",
  },
  skipButtonText: {
    ...FONTS.body4,
    color: "#ffffff",
  },
  nextButton: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 25,
    backgroundColor: "#4CAF50",
    alignItems: "center",
  },
  nextButtonText: {
    ...FONTS.h1,
  },
});
