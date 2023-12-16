import { View, Text, StyleSheet} from 'react-native'
import MultipleStyling from './MultipleStyling'

export const StylingRN = () => {
  return (
    <>
        <MultipleStyling/>
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