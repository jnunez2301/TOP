import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, FlatList } from "react-native";
import { PokeInfo } from "../helpers/PokeInfo";

export const PokeCard = () => {
    const { data } = PokeInfo();

    return (
        <SafeAreaView>
            {(
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View style={styles.container}>
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.image }}
                                />
                                <Text style={styles.text}>
                                    {item.name.toUpperCase()}
                                </Text>
                            </View>
                            <Text style={{ color: 'yellow' }}>{item.status}</Text>
                        </View>
                    )}
                keyExtractor={(item) => item.id.toString()} 
                /* horizontal */
                ItemSeparatorComponent={<View style={{height: 5}}/>}
                ListEmptyComponent={<Text style={styles.not_found}>No items found</Text>}
                ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
                ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
                />
            )}
        </SafeAreaView>
    );
};

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
        textAlign: 'center',
        marginBottom: 12
    },
    footerText: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 12
    }
});
