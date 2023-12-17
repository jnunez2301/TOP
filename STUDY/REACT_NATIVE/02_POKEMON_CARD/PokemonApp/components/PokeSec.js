import { View, Text, StyleSheet, SectionList } from 'react-native';
import pokeTypes from '../grouped-data.json';

export const PokeSec = () => {

  return (
    <View>
        <SectionList 
        sections={pokeTypes}
        renderItem={({ item }) => {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>{item}</Text>
                </View>
            )
        }}
        renderSectionHeader={({ section }) =>{
            return (
                <Text style={styles.headerText}>{section.type}</Text>
            )
        }}
        ListEmptyComponent={<Text style={styles.not_found}>Not found</Text>}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'midnightblue',
        borderRadius: 5,
        margin: 16,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    text: {
        textAlign: 'center',
        color: '#f2f2f2',
    },
    pokeball: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 10,
        right: 10,
    },
    not_found: {
        
        textAlign: 'center',
    },
    headerText: {
        fontSize: 24,
        marginBottom: 12
    },
    footerText: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 12
    }
});
