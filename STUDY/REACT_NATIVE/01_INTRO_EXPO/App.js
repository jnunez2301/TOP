import { useState } from 'react';
import { View, Text, Button, Modal, StatusBar } from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');

export default App = () => {

  const [showStatusBar, setShowStatusBar] = useState(true);


  return (
    <View style={{
      flex: 1,
      backgroundColor: "plum",
      padding: 60,

    }}>
      <StatusBar 
      backgroundColor={"midnightblue"}
      barStyle={'light-content'}
      hidden={showStatusBar}
      />
      {
        showStatusBar ? 
        <Button title='Show StatusBar' onPress={()=> setShowStatusBar(false)}/>
        : <Button title='Hide Status Bar' onPress={()=> setShowStatusBar(true)}/>
      }
    </View>
  )
}