import { View, StyleSheet, Text, Image } from "react-native";
import CustomHeader from "../components/CustomHeader";
import CustomButton from "../components/CustomButton";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import general from "../constants/General";
import { FONTS, Sizes, } from "../constants/Theme"

const Recieve = ({ navigation }) => {
    return (
        <View style={general.container}>
            <CustomHeader title="Recieve Money" />
            <View style={general.box}>
                <View style={{ flexDirection: "row", gap: 10, alignItems: "center", marginTop:5 }}>
                    <MaterialCommunityIcons name="bank-outline" size={26} color="black" style={styles.box} />
                    <Text style={FONTS.h3}>Pay With Transfer</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 10, marginTop: 5 }}>
                    <Text style={FONTS.h1}>111 111 1111</Text>
                    <Ionicons name="copy-outline" size={25} color="white" />
                </View>
                <Text style={FONTS.h4}>EDWARD OLUWATIMILEYIN DAVID</Text>
                <View style={{ flexDirection: "row", gap: 30, marginTop: 30 }}>
                    <CustomButton title="Copy Number" buttonStyle={general.button} />
                    <CustomButton title="Share Details" buttonStyle={general.button} />
                </View>
            </View>
            <View style={{ padding: 20,marginTop:10 }}>
                <Text>Ads</Text>
                <View style={styles.text}>
                    <Text style={FONTS.h2}>Coming Soon</Text>
                </View>
            </View>
        </View>
    )
};
export default Recieve;

const styles = StyleSheet.create({
    box: {
        width: 35,
        height: 35,
        borderRadius: 10,
        backgroundColor: "gray",
        paddingHorizontal: 4,
        paddingVertical: 3
    },
    text:{
        width: 370,
        height: 200,
        backgroundColor: "#d4d5d5",
        borderRadius: 20,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center"
    }
});