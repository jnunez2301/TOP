import  { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { RNForms } from './components/RNForms';



export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <RNForms />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight + 5,
  },
});
