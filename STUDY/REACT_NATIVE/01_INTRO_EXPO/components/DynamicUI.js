import { View, Text, StyleSheet, Dimensions, Platform } from "react-native"

export const DynamicUI = () => {
  return (
    <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
    </View>
  )
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


console.log(windowWidth);

const styles = StyleSheet.create({
    box:{
        width: windowWidth > 500 ? "90%" : "100%",
        height: 300,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS === 'android' ? 20 : 0
    },
    text: {
        fontSize: 24,
        ...Platform.select({
            ios: {
                color: 'blue'
            },
            android: {
                color: 'purple'
            }
        })
    }
})
