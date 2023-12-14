import { useState } from 'react';
import { View, Alert, Text, Button} from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');

export default App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={{
      flex: 1,
      backgroundColor: "plum",
      padding: 60,
    }}>
      <Button title='Alert' onPress={() => 
        Alert.alert("Invalid data!")
        }/>
      <Button title='Alert2' onPress={() => 
        Alert.alert("Invalid data!", "DOB Incorrect")
        }/>
      <Button title='Alert3' onPress={() => 
        Alert.alert("Invalid data!", "DOB Incorrect",
        [
        {
          text: 'Cancel',
          onPress: () => console.log('cancel pressed')
        },
        {
          text: 'OK',
          onPress: ()=> console.log('Ok Pressed')
        },
        {
          text: 'Third one',
          onPress: () => console.log('third one pressed')
        }
        ])
        }/>
    </View>
  )
}