import { View, StyleSheet, Text } from 'react-native'

const MultipleStyling = () => {
  return (
    <View>
        <View style={styles.darkMode}>
        <Text style={styles.darkModeText} >
            Text inherittance 
            <Text style={styles.darkBoldText}> in bold</Text>
        </Text>
        </View>
    <View style={[styles.box, styles.lightBlueBox, styles.boxShadow]}>
        <Text>Lightblue box</Text>
    </View>
    <View style={[styles.box ,styles.lightGreenBox, styles.boxShadow]}>
        <Text>Light green box</Text>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    box: {
        width: '50%',
        height: 100,
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        borderStyle: 'solid',
        borderRadius: 5,
        margin: 5
        
    },
    boxShadow: {
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowRadius: 10,
        // For Android just eleveation works!
        elevation: 10
    },
    lightBlueBox: {
        backgroundColor: 'lightblue',
        
    },
    lightGreenBox: {
        backgroundColor: 'lightgreen',
    },
    darkMode: {
        backgroundColor: 'black'
    },
    darkModeText: {
        color: 'white',
    },
    darkBoldText: {
        fontWeight: 'bold'
    }
})

export default MultipleStyling