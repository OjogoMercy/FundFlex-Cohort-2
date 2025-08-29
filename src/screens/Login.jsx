import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import CustomHead from '../components/CustomHead'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation()
    const [input, setInput] = useState('')
    const [Password, setPassword] = useState('')

  return (
    <View style={styles.container}>

    <CustomHead title={'Login'}/>
     <View style={styles.form}>
        <Text>Phone/Email Address</Text>
         <CustomInput value={input} onChangeText={setInput } containerStyle={{marginBottom:50,}} />
         <Text>Password</Text>
         <CustomInput value={Password} onChangeText={setPassword } secure={true}/>
         <View style={{alignItems:'flex-end'}}><Text onPress={() => navigation.navigate("ResetPassword")}>Forgotten Password</Text></View>
     </View>

      <View>
        <CustomButton title='Login' buttonStyle={{width:'80%',alignSelf:'center',marginTop:30}} onPress={() => navigation.navigate("Profile")}/>
       <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>
        <Text>Don't have an aaccount?</Text>
       <Text  style ={{color:'green'}} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text></View>
      </View>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    
  },
  form:{
    padding:10,
    marginTop:29
  }
})