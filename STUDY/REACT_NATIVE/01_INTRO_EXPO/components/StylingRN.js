import { View, Text, StyleSheet} from 'react-native'

export const StylingRN = () => {
  return (
    <>
        <Text style={styles.title}>Hi there</Text>
    </>
  )
}

// You can also export it to use it everywhere
// You can do it without the StyleSheet is possible 
// But it doesn't provide autocompletion
export const styles = StyleSheet.create({
    title: {
        color: 'white'
    }
})