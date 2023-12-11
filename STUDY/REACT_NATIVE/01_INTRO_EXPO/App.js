import { useState } from 'react';
import { View, ActivityIndicator, Text, Button} from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');

export default App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={{
      flex: 1,
      backgroundColor: "plum",
      padding: 60,
    }}>
      {
        loading ?
      <View style={{flex: 1}}>
        <ActivityIndicator
      size={200}
      color={"#fff"} 
      animating={loading}
      />
      <Button title='Stop' onPress={()=>setLoading(false)}/>
      </View>
      :
      <Button onPress={() => setLoading(true)} title='Load'/>
      }
    </View>
  )
}