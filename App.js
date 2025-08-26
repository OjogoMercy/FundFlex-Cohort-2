import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./src/components/CustomButton";
import CustomHeader from "./src/components/CustomHeader";
import { Colors } from "./src/constants/Theme";
export default function App() {
  return (
    <View style={styles.container}>
      <CustomHeader title="index" />
      <CustomButton title="buttonComponent" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
