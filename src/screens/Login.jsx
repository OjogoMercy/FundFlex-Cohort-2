import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import CustomHeader from '../components/CustomHeader'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation()
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
        <CustomButton title='Login' buttonStyle={{width:'80%',alignSelf:'center',marginTop:30}} onPress={() => navigation.navigate('SignUp')}/>
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
  form:{
    padding:10,
    marginTop:29
  }
})