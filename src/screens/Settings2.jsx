import React from "react";
import {View,Text,StyleSheet,FlatList} from "react-native";
import CustomHeader from "../components/CustomHeader";
import general from "../constants/General";
import AntDesign from '@expo/vector-icons/AntDesign';

const itemBar=[
    {name:"Change Login Pin", icon:<AntDesign name="right" size={15} color="black"/>},{name:"Logde Complaint",icon:<AntDesign name="right" size={15} color="black" />}]

const Settings2 =({navigation}) => {
    return(
        <View style={general.container}>
         <CustomHeader title={"Login Settings"}/>

         <FlatList 
             data={itemBar}
             renderItem={({item,}) =>{
              return(
                <View style={{
                  width:390,
                  height:40,
                  justifyContent:'space-between',
                  padding:10,
                  marginTop:30,
                  backgroundColor:'white',
                  flexDirection:'row',
                  marginHorizontal:10,
                  shadowColor:'black',
                  shadowOffset: { width:2, height:5},
                  shadowOpacity: 0.3,
                  shadowRadius: 5,
                }}>
                 <Text onPress={() => navigation.navigate('Payment')}>{item.name}</Text>
                 <Text>{item.icon}</Text>
                </View>
              )
             }} />
        </View>
    )
};

export default Settings2;

const styles = StyleSheet.create ({

});