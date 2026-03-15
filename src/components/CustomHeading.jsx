import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors, FONTS, Sizes } from "../constants/Theme";
import { StatusBar } from "react-native";
import { useNavigation } from 'expo-router';
const CustomHeading = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: Colors.fund,
        height: Sizes.height* 0.1,
        width: Sizes.width * 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap:140,
        padding:10
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
      <View style={{ width: Sizes.body2 * 4,
            height: Sizes.h1 * 1.5,backgroundColor:'white',borderRadius:5,justifyContent:'center',alignSelf:'center',marginTop:10}}>
        <Text
        style={{
          ...FONTS.h3,
          textAlign: "center",
          color: Colors.black,
        }}
      >
        {title}
      </Text>
      </View>
    </View>
  );
};

export default CustomHeading;

const styles = StyleSheet.create({});
