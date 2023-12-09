import { View, Text, Image, ImageBackground, ScrollView, Button } from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');

export default App = () => {

  const handlePress = () => {
    console.log('hi');
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: "plum",
      padding: 60
    }}>
      <Button
      title='Press' 
      onPress={handlePress}
      color="midnightblue"/>
    </View>
  )
}