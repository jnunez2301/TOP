import { StyleSheet, View, Text, ScrollView } from 'react-native'

export const FlexBox = ({ children, style }) => {
  return (
        <View style={[styles.box, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'cyan',
        width: '100%',
        height: 100,
        borderRadius: 5,
        margin: 10,
        padding: 16,
        justifyContent: 'center',
        
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',        
    }
})