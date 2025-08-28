import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Theme";
import { StatusBar } from "react-native";
import { useNavigation } from 'expo-router';
const CustomHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: Colors.primary,
        height: SCREEN_HEIGHT * 0.1,
        width: SCREEN_WIDTH * 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
    <StatusBar backgroundColor="white" barStyle={'light-content'} />

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name="arrowleft"
          size={SCREEN_HEIGHT * 0.03}
          color={Colors.white}
        />
      </TouchableOpacity> 
      <Text
        style={{
          ...FONTS.h2,
          textAlign: "center",
          color: Colors.white,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
