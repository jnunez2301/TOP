import { View, Text, Button, StyleSheet } from 'react-native'

export const HomeScreen = ({ navigation, route }) => {

  return (
    <View style={styles.container}>
        <Text
        style={styles.text}
        >HomeScreen</Text>
        <Button title='Go to About' onPress={() => navigation.navigate("About", {
          name: "Vishas"
        })}/>
    </View>
  )
}


export const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  text: {
    fontSize: 24,
    margin: 16
  }
})