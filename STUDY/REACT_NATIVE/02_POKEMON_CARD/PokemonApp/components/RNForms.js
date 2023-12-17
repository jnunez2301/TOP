import { useState } from 'react';
import { View, Text, StatusBar, TextInput, StyleSheet } from 'react-native'

export const RNForms = () => {

    const [name, setName] = useState("");
    
  return (
    <View>
        <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder='email@example.com'
        secureTextEntry={false}
        keyboardType='default'
        autoCorrect={false}
        autoCapitalize={false}/>
        <TextInput 
        style={[styles.input, styles.multilineText]}
        placeholder='message'
        multiline/>
        <Text style={styles.text} > My name is {name}</Text>
        
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5
    },
    text: {
        fontSize: 30,
        padding: 10,
    },
    multilineText: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
});
