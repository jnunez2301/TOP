import { StylingRN } from "./components/StylingRN"
import { View, StyleSheet } from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
    <StylingRN/>
    </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: 'plum'
  }
})
export default App