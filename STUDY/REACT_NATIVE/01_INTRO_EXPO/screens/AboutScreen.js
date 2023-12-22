import { View, Text, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './HomeScreen'
export const AboutScreen = ({ route }) => {

  const { name } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text style={styles.text}>About {name}</Text>
        <Button title='Go Home' onPress={()=> navigation.navigate('Home')}/>
        <Button title='Update the name' onPress={() =>  navigation.setParams({
          name: "Jhon2"
        })}/>
        <Button 
        title='Go back with data'
        onPress={() => navigation.navigate("Home", 
        {
          result: 'Data from about'
        })}
        />
    </View>
  )
}