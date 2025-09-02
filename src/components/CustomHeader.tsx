import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Theme";
// import { useNavigation } from 'expo-router';
const CustomHeader = ({ title }) => {
  // const navigation = useNavigation();
  // const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 100,
            width: SCREEN_WIDTH * 0.9,
          }}
        >
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={24} color="white" />
            
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="arrow-circle-left"
          size={SCREEN_HEIGHT * 0.03}
          color={Colors.primary}
        />
      </TouchableOpacity> */}
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
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
