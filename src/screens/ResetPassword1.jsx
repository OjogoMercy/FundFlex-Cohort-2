import React from "react";
import { useState } from "react";
import {View,Text,StyleSheet} from 'react-native';
import CustomHeader from "../components/CustomHeader";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import general from "../constants/General";
import { ThemeContext } from "@react-navigation/native";
import { FONTS } from "../constants/Theme";

const ResetPassword = ({navigation}) => {
     const [input, setInput] = useState('')
    return(
    <View style={general.container}>
     <CustomHeader title={'Reset Password'}/>

     <View style={{marginVertical:80,marginHorizontal:20}}>
      <Text style={FONTS.body3}>Create Password</Text>
      <CustomInput value={input} onChangeText={setInput } containerStyle={{width:'100%'}}/>
     </View>

     <CustomButton title="Next"  buttonStyle={{width:'60%',alignSelf:'center'}} onPress={() => navigation.navigate('ResetPassword2')}/>
    </View>
    )};
    
export default ResetPassword;

 const styles = StyleSheet.create ({

 });