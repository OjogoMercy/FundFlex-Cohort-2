import React from "react";
import { useState } from "react";
import {View,Text,StyleSheet} from 'react-native';
import CustomHeader from "../components/CustomHeader";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import general from "../constants/General";
import { ThemeContext } from "@react-navigation/native";
import { FONTS } from "../constants/Theme";

const ResetPassword2 = () => {
     const [input, setInput] = useState('')
     const [password, setPassword] = useState('')
    return(
    <View style={general.container}>
     <CustomHeader title={'Reset Password'}/>

     <View style={{marginVertical:20,padding:10}}>
      <Text style={FONTS.body3}>Create password</Text>
      <CustomInput value={input} onChangeText={setInput } containerStyle={{marginBottom:30}}/>
      <Text>Confirm password</Text>
       <CustomInput value={password} onChangeText={setPassword }/>
     </View>

     <CustomButton title="Next"  buttonStyle={{width:'60%',alignSelf:'center',marginTop:20}} onPress={() => navigation.navigate('')}/>
    </View>
    )};
    
export default ResetPassword2;

 const styles = StyleSheet.create ({

 });