import { useState } from 'react';
import { View, Text, Image, Button, Pressable, Modal } from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');

export default App = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  
  
  return (
    <View style={{
      flex: 1,
      backgroundColor: "plum",
      padding: 60,
      
    }}>
      <Button
      title='open modal'
      onPress={() => setIsModalVisible(true)}>

      </Button>
    <Modal 
    presentationStyle="pageSheet"
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}
      animationType='slide'
      
      >
      <View style={{
      flex: 1,
      backgroundColor: "midnightblue",
      padding: 60,
      
    }}>
      <Text>Modal Content</Text>
      <Button 
      onPress={() =>  setIsModalVisible(false)}
      title='Close'
      color={'lightblue'}></Button>
    </View>
      </Modal>
    </View>
  )
}