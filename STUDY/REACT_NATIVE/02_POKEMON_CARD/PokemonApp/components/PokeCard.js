
import { View, Text, Image, StyleSheet, ScrollView} from "react-native";
import { PokeInfo } from "../helpers/PokeInfo";

export const PokeCard = () => {
    const { data } = PokeInfo();
    
    
  return (
    <ScrollView>
            {data.length > 0 && data.map((pokemon, index) => (
                <View key={index} style={styles.container}>
                    <Image
                        style={styles.img}
                        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png` }}
                    />
                    <Text>{pokemon.name}</Text>
                </View>
            ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgreen',
        borderRadius: 5,
        margin: 16
    },
    img: {
        width: 200,
        height: 200
    }
})