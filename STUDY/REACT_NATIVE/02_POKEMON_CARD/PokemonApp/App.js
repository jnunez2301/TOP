import  { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { LoginForm } from './components/LoginForm';
import { RestAPI } from './components/RestAPI';



export default function App() {
  const baseURL = 'https://jsonplaceholder.typicode.com/posts?limit=10'
  return (
    <SafeAreaView style={styles.container}>
      <RestAPI />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /* container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight + 5,
  }, */
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5"
  }
});
