import { View, Text, StyleSheet, Dimensions } from "react-native"

export const DynamicUI = () => {
  return (
    <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
    </View>
  )
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    box:{
        
        width: windowWidth > 500 ? "70%" : "90%",
        height: 300,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
    }
})
