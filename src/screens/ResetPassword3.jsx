import React from "react";
import {View,Text,StyleSheet} from "react-native";
import CustomButton from "../components/CustomButton";
import CustomHeader from "../components/CustomHeader";
import { FONTS } from "../constants/Theme";
import general from "../constants/General";
import AntDesign from '@expo/vector-icons/AntDesign';

const ResetPassword3 = () => {
    return(
     <View style={general.container}>
      <CustomHeader title={"Reset Password"} />
      
      <View style={{alignItems:'center',marginTop:100}}>
        <AntDesign name="checkcircle" size={150} color={'green'} style={general.icons} />
      </View>
      <View style={{alignItems:'center',marginTop:30,}}><Text style={FONTS.body1a}>Password Reset Successfully</Text></View>
     </View>
    )
};

export default ResetPassword3;
