import { View, StyleSheet, Text, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomHeader from "../components/CustomHeader";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import general from "../constants/General";
import { FONTS } from "../constants/Theme";

const Send = () => {
    return (
        <View style={general.container}>
            <CustomHeader title={"Send Money"} />
            <View style={{ alignItems: "center" }}>
                <Text style={FONTS.body3b}>Amount</Text>
                <CustomButton title="N100,000" buttonStyle={{ width: 200, borderRadius: 40, borderWidth: "1", marginBottom: 30, height: 50 }} textStyle={FONTS.body3b} />
            </View>
            <View style={{ flexDirection: "row", gap: 20, justifyContent: "center" }}>
                <CustomButton title="N500" buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: "green", }} textStyle={{ color: "green", fontSize: 15, fontWeight: "light" }} />
                <CustomButton title="N1000" buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: "green", }} textStyle={{ color: "green", fontSize: 15, fontWeight: "light" }} />
                <CustomButton title="N5000" buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: "green", }} textStyle={{ color: "green", fontSize: 15, fontWeight: "light" }} />
            </View>
            <View style={{ flexDirection: "row", gap: 20, justifyContent: "center" }}>
                <CustomButton title="N10,000" buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: "green" }} textStyle={{ color: "green", fontSize: 15, fontWeight: "light" }} />
                <CustomButton title="N50,000" buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: "green", }} textStyle={{ color: "green", fontSize: 15, fontWeight: "light" }} />
                <CustomButton title="N100,000" buttonStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: "green",}} textStyle={{ color: "green", fontSize: 15, fontWeight: "light" }} />
            </View>
            <View style={{ alignItems: "flex-start", paddingHorizontal: 15, marginTop: 25 }}>
                <Text>Account Number</Text>
                <CustomInput secure={false} containerStyle={{ width: 380, height: 35 }} />
                <Text>Bank Name</Text>
                <CustomInput secure={false} containerStyle={{ width: 380, height:35 }} />
                <Text>Account Name</Text>
                <CustomInput placeholder="Edward David" secure={false} containerStyle={{ width: 380, height:35 }} />
            </View >
            <View style={{paddingHorizontal:15,marginTop:10}}>
                <Text>Send to beneficiary</Text>
                <View style={{ flexDirection: "row", gap: 9,marginTop:10}}>
                    <AntDesign name="pluscircle" size={30} color="grey" />
                    <Image source={require("../assets/images/avatar1.jpg")} style={{ width: 30, height: 30, borderRadius: 30 }} />
                    <Image source={require("../assets/images/avatar2.jpg")} style={{ width: 30, height: 30, borderRadius: 30 }} />
                    <Image source={require("../assets/images/avatar3.jpg")} style={{ width: 30, height: 30, borderRadius: 30 }} />
                    <Image source={require("../assets/images/avatar4.jpg")} style={{ width: 30, height: 30, borderRadius: 30 }} />
                    <Image source={require("../assets/images/avatar2.jpg")} style={{ width: 30, height: 30, borderRadius: 30 }} />
                    <Image source={require("../assets/images/avatar4.jpg")} style={{ width: 30, height: 30, borderRadius: 30 }} />
                    <Image source={require("../assets/images/avatar3.jpg")} style={{ width: 30, height: 30, borderRadius: 30 }} />
                    <Image source={require("../assets/images/avatar1.jpg")} style={{ width: 30, height: 30, borderRadius: 30 }} />
                    <Image source={require("../assets/images/avatar2.jpg")} style={{ width: 30, height: 30, borderRadius: 30 }} />
                </View>
            </View>
            <CustomButton title="Next" buttonStyle={{width:200,alignSelf:'center',backgroundColor:"green"}} textStyle={FONTS.h3}/>
        </View>
    )
};
export default Send;

const styles = StyleSheet.create({

});