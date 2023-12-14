import { View, Text, StyleSheet} from 'react-native'

export const StylingRN = () => {
  return (
    <>
        <Text style={styles.title}>Hi there</Text>
    </>
  )
}

const styles = StyleSheet.create({
    title: {
        color: 'white'
    }
})