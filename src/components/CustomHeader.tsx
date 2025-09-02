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
        backgroundColor: Colors.primary,
        height: Sizes.height* 0.1,
        width: Sizes.width * 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap:150,
        padding:5
      }}
    >
    <StatusBar backgroundColor="white" barStyle={'light-content'} />

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name="arrowleft"
          size={Sizes.height* 0.03}
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
