import { Children } from "react"
import { View, Text, Image } from "react-native"

export const PokemonCard = ({children}) => {
  return (
    <View>
        <Text>{children}</Text>
    </View>
  )
}
