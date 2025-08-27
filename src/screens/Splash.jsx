import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import CustomButton from '../components/CustomButton'

const Splash = () => {
    const navigation = useNavigation()
  return (
    <View>
          <Text>Splash</Text>
          <CustomButton title='Go to Login' onPress={() => navigation.navigate('Login')}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})