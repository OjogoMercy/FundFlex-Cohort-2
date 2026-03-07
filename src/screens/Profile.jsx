import { StyleSheet, Text, View,Image,FlatList } from 'react-native'
import React from 'react'
import general from '../constants/General'
import { FONTS } from '../constants/Theme'
import CustomButton from '../components/CustomButton'
import CustomHeader from '../components/CustomHeader'

const itemBar=[
    {name:"Mobile Number", icon:"09100000000"},{name:"Gender",icon:"Male"},{name:'E-mail',icon:"cephasicthub@gmail"},{name:"Address",icon:"Yoaco,Ogbmosho"}]

const Profile = ({navigation}) => {
  return (
    <View style={general.container}>
     <CustomHeader title={'Profile'} />

    <View style={{alignItems:'center',marginVertical:30}}>
       <Image source={require('../assets/images/avatar1.jpg')} style={{width:120,height:120,borderRadius:120}} />
       <Text style={FONTS.body2a}>David</Text>
    </View>

    
     <FlatList 
     data={itemBar}
     renderItem={({item,}) =>{
      return(
        <View style={{
          width:390,
          height:40,
          justifyContent:'space-between',
          padding:10,
          marginBottom:20,
          backgroundColor:'white',
          flexDirection:'row',
          marginHorizontal:8,
          shadowColor:'black',
          shadowOffset: { width:2, height:5},
          shadowOpacity: 0.3,
          shadowRadius: 5
        }}>
         <Text>{item.name}</Text>
         <Text>{item.icon}</Text>
        </View>
      )
     }} />
<<<<<<< HEAD
      <CustomButton title='Update' buttonStyle={{width:'70%',alignSelf:'center',height:55,marginBottom:50}} onPress={() => navigation.navigate('Settings1')}/>
=======
     <CustomButton title='Update' buttonStyle={{width:'70%',alignSelf:'center',height:55,marginBottom:50}} onPress={() => navigation.navigate('Login')}/>
>>>>>>> 5183f778aced0bf64cadb77eee89043c980b21f3
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})