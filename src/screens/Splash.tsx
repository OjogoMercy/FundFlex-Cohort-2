import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import CustomButton from '../components/CustomButton'

const Splash = () => {
    const navigation = useNavigation()
  return (
    <View style={{flex:1,justifyContent:'center'}}>
          <Text>Splash</Text>
          <CustomButton title='Go to Login' onPress={() => navigation.navigate('IntroScreen1')}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})