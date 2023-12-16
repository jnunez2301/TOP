import { DynamicUI } from "./components/DynamicUI";
import { FlexBox } from "./components/FlexBox";
import { StylingRN } from "./components/StylingRN"
import { View, StyleSheet, ScrollView } from 'react-native';
const App = () => {
  return (
    <ScrollView style={styles.container}>
      <DynamicUI></DynamicUI>
    </ScrollView> 
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    marginTop: 20,
    backgroundColor: 'plum'
  }
})
export default App