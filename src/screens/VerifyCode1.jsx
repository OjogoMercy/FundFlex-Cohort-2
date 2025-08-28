import {View,StyleSheet,Text} from 'react-native'
import React from 'react'
import general from '../constants/General';
import { ThemeContext } from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';
import { FONTS } from '../constants/Theme';
import CustomButton from '../components/CustomButton';

 const VerifyCode = ({navigation}) => {
    return(
    <View style={general.container}>
     <CustomHeader title={'Verify Code'}/>

     <View style={{alignItems:'center',padding:10,marginTop:80}}>
     <Text style={general.title}>Verify Code</Text>
     <Text style={FONTS.h3}>Enter the OTP that was sent to the number you entered</Text>
     <View style={{width:20,height:20,borderWidth:1}}></View>
     </View>

     <CustomButton title='Submit' buttonStyle={{width:'60%',alignSelf:'center',marginTop:30}} onPress={() => navigation.navigate('ResetPassword')}/>
    </View>
    
    )};
    export default VerifyCode;
    const styles = StyleSheet.create({

    });