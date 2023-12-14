import { useState } from 'react';
import { View, Alert, Text, Button} from 'react-native';
import Greet from './components/Greet';
const logoImg = require('./assets/adaptive-icon.png');

export default App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={{
      flex: 1,
      backgroundColor: "plum",
      padding: 60,
    }}>
      <Greet name={'Jhon'}/>
      <Greet name={'Andreita'}/>
    </View>
  )
}