import  { View, StyleSheet } from 'react-native'

import { PokeCard } from './components/PokeCard';

export default function App() {
  
  
  return (
    <View style={styles.container}>
      <PokeCard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginTop: 50
  },
});
