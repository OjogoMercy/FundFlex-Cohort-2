import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import CustomHeader from "../components/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { Colors, Sizes, FONTS } from "../constants/Theme";

export default function Personal() {
  return (
    <SafeAreaView style={{}}>
      <CustomHeader title="Personal Information" />
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ marginTop: "40%", fontSize: 20 }}>BVN</Text>
        <View
          style={{
            width: Sizes.h1 * 11,
            height: Sizes.h1 * 1.5,
            
            borderRadius: 7,
            marginTop: Sizes.body3,
            paddingHorizontal: Sizes.body4,
            backgroundColor: Colors.lightGray,
            
          }}
        >
          <TextInput
            placeholder="Enter your BVN"
            style={{ ...FONTS.body4, flex: 1 }}
            keyboardType="numeric"
            maxLength={11}
          />
        </View>

        <View style={styles.buttonContainer}>
          <View style={{ width: "40%" }}>
            <CustomButton
              onPress={() => console.log("Skip pressed")}
              title="Skip"
              textStyle={{ color: Colors.green }}
              buttonStyle={{
                backgroundColor: "transparent",

                borderWidth: 1,
                borderColor: "green",
              }}
            />
          </View>

          <View style={{ width: "40%" }}>
            <CustomButton
              onPress={() => console.log("Skip pressed")}
              title="Next"
              textStyle={{ color: Colors.white }}
              buttonStyle={{
                backgroundColor: "green",
                borderColor: "green",
                borderWidth: 1,
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Sizes.body5,
    paddingHorizontal: 20,
  },
});
