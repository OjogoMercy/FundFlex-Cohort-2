import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'

const Login = () => {
    const [input, setInput] = useState('')

  return (
    <View>
          <Text>Login</Text>
          <CustomInput value={input} onChangeText={setInput } />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})