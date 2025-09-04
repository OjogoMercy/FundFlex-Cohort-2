import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors, FONTS, Sizes } from "../constants/Theme";
import { StatusBar } from "react-native";
import { useNavigation } from 'expo-router';
const CustomHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: Colors.white,
        height: Sizes.height* 0.1,
        width: Sizes.width * 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap:100,
        padding:15
      }}
    >
    <StatusBar backgroundColor="white" barStyle={'light-content'} />

    <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name="arrowleft"
          size={Sizes.height* 0.03}
          color={Colors.primary}
        />
      </TouchableOpacity> 
      <Text
        style={{
          ...FONTS.h1,
          textAlign: "center",
          color: Colors.primary,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
