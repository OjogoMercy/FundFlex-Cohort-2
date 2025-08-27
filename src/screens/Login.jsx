import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import CustomHeader from '../components/CustomHeader'

const Login = () => {
    const [input, setInput] = useState('')
    const [Password, setPassword] = useState('')

  return (
    <View style={styles.container}>

    <CustomHeader title={'Login'}/>
     <View style={styles.form}>
        <Text>Phone/Email Address</Text>
         <CustomInput value={input} onChangeText={setInput } containerStyle={{marginBottom:50,}} />
         <Text>Password</Text>
         <CustomInput value={Password} onChangeText={setPassword } secure={true}/>
         <View style={{alignItems:'flex-end'}}><Text>Forgotten Password</Text></View>
     </View>

      <View>
        <CustomButton title='Login' buttonStyle={{width:'80%',alignSelf:'center',marginTop:30}}/>
        <Text style={{alignSelf:'center'}}>Don't have an aaccount? Sign up</Text>
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
  box:{
    width:430,
    height:100,
    backgroundColor:'#0A2342',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:'white',
    fontSize:25
  },
  form:{
    padding:10,
    marginTop:29
  }
})