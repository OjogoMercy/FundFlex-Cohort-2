import React from "react";
import {View,Text,StyleSheet,FlatList,Image} from "react-native";
import CustomButton from "../components/CustomButton";
import CustomHeader from "../components/CustomHeader";
import general from "../constants/General";
import { FONTS } from "../constants/Theme";
import AntDesign from '@expo/vector-icons/AntDesign';

const itemBar=[
    {name:"Login Settings", icon:<AntDesign name="right" size={15} color="black"/>},{name:"Payment Settings",icon:<AntDesign name="right" size={15} color="black" />},{name:"Customers support",icon:<AntDesign name="right" size={15} color="black" />},{name:"About Us",icon:<AntDesign name="right" size={15} color="black" />},
    {name:"Rate Us",icon:<AntDesign name="right" size={15} color="black" />},{name:"Terms & Conditions",icon:<AntDesign name="right" size={15} color="black" />},{name:"Privacy & Policy",icon:<AntDesign name="right" size={15} color="black" />}]

const Settings1 =({navigation}) => {
    return(
        <View style={general.container}>
         <CustomHeader title={"Settings"}/>

        <View style={{alignItems:'center',marginVertical:10}}>
         <Image source={require('../assets/images/avatar1.jpg')} style={{width:100,height:100,borderRadius:100}} />
         <Text style={FONTS.body1}>David</Text>
         <Text style={FONTS.body5}>Edit Profile</Text>
        </View>

         <FlatList 
             data={itemBar}
             renderItem={({item,}) =>{
              return(
                <View style={{
                  width:390,
                  height:37,
                  justifyContent:'space-between',
                  padding:10,
                  marginBottom:10,
                  backgroundColor:'white',
                  flexDirection:'row',
                  marginHorizontal:8,
                  shadowColor:'black',
                  shadowOffset: { width:2, height:5},
                  shadowOpacity: 0.3,
                  shadowRadius: 5
                }}>
                 <Text onPress={() => navigation.navigate("Settings2")}>{item.name}</Text>
                 <Text>{item.icon}</Text>
                </View>
              )
             }} />
            <CustomButton title='Log Out' buttonStyle={{width:'70%',alignSelf:'center',height:55,marginBottom:80}} onPress={() => navigation.navigate('Login')}/>
        </View>
    )
};

export default Settings1;

const styles = StyleSheet.create ({

});