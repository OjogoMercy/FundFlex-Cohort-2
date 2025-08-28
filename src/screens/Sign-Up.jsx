import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import { useState } from 'react'
import React from 'react'
import general from '../constants/General'
import CustomHeader from '../components/CustomHeader'
import CustomInput from '../components/CustomInput'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../components/CustomButton'

const SignUp = () => {

  const navigation = useNavigation()
  const [input, setInput] = useState('')
    const [first, setFirst] = useState('')
    const [Last, setLast] = useState('')
    const [create, setCreate] = useState('')
    const [confirm, setConfirm] = useState('')

  return (
    <View style={general.container} >
      <CustomHeader title={'Sign Up'} />
      
      <ScrollView style={{padding:10,marginTop:25}}>
      <Text>Phone/Email Address</Text>
      <CustomInput value={input} onChangeText={setInput } containerStyle={{marginBottom:20,}}/>
      <Text>First Name</Text>
      <CustomInput value={first} onChangeText={setFirst } containerStyle={{marginBottom:30,}}/>
      <Text>Last Name</Text>
      <CustomInput value={Last} onChangeText={setLast } containerStyle={{marginBottom:30,}}/>
      <Text>Create Password</Text>
      <CustomInput value={create} onChangeText={setCreate } containerStyle={{marginBottom:30,}}/>
      <Text>Confirm Password</Text>
      <CustomInput value={confirm} onChangeText={setConfirm }/>
      </ScrollView>

       <View style={{marginBottom:10}}>
        <CustomButton title='Sign Up' buttonStyle={{width:'80%',alignSelf:'center',marginBottom:5}} onPress={() => navigation.navigate('VerifyCode')}/>
        <View style={{flexDirection:'row',alignSelf:'center'}}>
          <Text>Already have an aaccount?</Text>
          <Text style={{color:'green'}} onPress={() => navigation.navigate('Login')}>Log In</Text>
        </View>
      </View>

    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})