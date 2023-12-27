import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppStack } from './AppStack';
import { TabApps } from './TabApp';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <AppStack style={{borderWidth: 2, borderColor: 'black'}}/> */}
      <TabApps />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
