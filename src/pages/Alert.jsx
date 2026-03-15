import React from "react";
import {FlatList, View,Text} from "react-native";
import general from "../constants/General";
import CustomHeading from "../components/CustomHeading";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const itemBar=[
{ name:'Come back tomorrow, You have exceeded todays limit',icon:<FontAwesome name="circle" size={24} color="#D94C4C" />},
{name:'Come back tomorrow, You have exceeded todays limit',icon:<FontAwesome name="circle" size={24} color="#1E8F6B" />},
{name:'Come back tomorrow, You have exceeded todays limit',icon:<FontAwesome name="circle" size={24} color="#D94C4C" />},
{name:'Come back tomorrow, You have exceeded todays limit',icon:<FontAwesome name="circle" size={24} color="#D94C4C" />},
{name:'Come back tomorrow, You have exceeded todays limit',icon:<FontAwesome name="circle" size={24} color="#D94C4C" />},
{name:'Come back tomorrow, You have exceeded todays limit',icon:<FontAwesome name="circle" size={24} color="#D94C4C" />},
{name:'Come back tomorrow, You have exceeded todays limit',icon:<FontAwesome name="circle" size={24} color="#1E8F6B" />},
{name:'Come back tomorrow, You have exceeded todays limit',icon:<FontAwesome name="circle" size={24} color="#D94C4C" />},


  
]

export default function Alert() {
    return(
      <View style={general.container}>
        <CustomHeading title={'Alert'}/>

        <FlatList 
        data={itemBar}
        renderItem={({item,}) =>{
          return(
        <View style={{
                  width:395,
                  height:50,
                  padding:5,
                  marginTop:15,
                  marginVertical:2,
                  backgroundColor:'white',
                  flexDirection:'row',
                  marginHorizontal:10,
                  shadowColor:'black',
                  shadowOffset: { width:2, height:5},
                  shadowOpacity: 0.3,
                  shadowRadius: 5,
                  gap:5,
                  alignItems:'center'
                }}>
              <Text>{item.icon}</Text>
              <Text>{item.name}</Text>
         </View>
          )
        }
        }/>
      </View>
    );
} 