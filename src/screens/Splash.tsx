import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../components/CustomButton'
import { Images } from '../constants/Images'
import { useEffect } from 'react'

const Splash = () => {
    const navigation = useNavigation()
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('IntroScreen1')
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigation]);
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <Image source={Images.FundFlex} style={styles.FundFlex} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  FundFlex: {
    width: 400,
    height: 400,
    alignSelf: 'center',
    marginBottom: "0%",
  },
})