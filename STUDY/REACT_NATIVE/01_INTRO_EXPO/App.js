import { View, Text, Image, Button, Pressable } from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');

export default App = () => {
  const handlePress = () => {
    console.log('onPress');
  }
  const handlePressIn = () => {
    console.log('onPressIn');
  }
  const handlePressOut = () => {
    console.log('onPressOut');
  }
  const handleLongPress = () => {
    console.log('long press');
  }
  
  return (
    <View style={{
      flex: 1,
      backgroundColor: "plum",
      padding: 60,
      
    }}>
      <Button
      title='Press' 
      onPress={handlePress}
      color="midnightblue"/>
      <Pressable onPressIn={handlePressIn}>
        <Image source={logoImg} style={{width: 200,
        height: 200}} />
      </Pressable>
      <Pressable onLongPress={handleLongPress}>
      <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam similique, rem officiis, alias aliquam harum optio tempora ratione vitae, recusandae voluptas? Sint fugiat quam fugit veritatis commodi voluptates debitis sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus delectus esse commodi id reiciendis, nihil eligendi. Odit magni iste amet fugit, ipsum hic placeat officiis tempora cupiditate facilis exercitationem.</Text>
      </Pressable>
      <Pressable onPressOut={handlePressOut}>
        <Text>Press Out</Text>
      </Pressable>
    </View>
  )
}