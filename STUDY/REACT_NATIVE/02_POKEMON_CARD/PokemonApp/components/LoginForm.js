import { useState } from 'react';
import {View, Text, 
    TextInput, StyleSheet, Button,
     Image, KeyboardAvoidingView,
      Platform} from 'react-native'

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        if(!username) errors.username = "Username is required";
        if(!password) errors.password = "Password is required";

        setErrors(errors); 

        return Object.keys(errors).length === 0;
    }

    const handleSubmit = () => {
        if(validateForm()){
            console.log("Submited", username, password);
            setUsername("");
            setPassword("");
            setErrors("");
        }
    }

  return (
    <KeyboardAvoidingView
    behavior= {Platform.OS === 'ios' ? 'padding' : ''}
    keyboardVerticalOffset={100}
    style={styles.form}>
        <Image source={require('../assets/adaptive-icon.png')}
        style={styles.image}/>
        <Text style={styles.label}>Username</Text>
        <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder='Enter your username'/>
        {
            errors.username ? <Text style={styles.errorText}>{
            errors.username}</Text> : null
        }
        <Text
        style={styles.label}>Password</Text>
        <TextInput
        onChangeText={setPassword}
        style={styles.input}
        placeholder='Enter your password'
        value={password}
        secureTextEntry />
        {
            errors.password ? <Text style={styles.errorText}>{
            errors.password}</Text> : null
        }
        <Button 
        style={styles.btn}
        title='login'
        onPress={ () => handleSubmit()}
        />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    btn: {
        marginBottom: 10
    },
    input: {
        height: 40,
        margin: 15,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#ddd"
    },
    text: {
        fontSize: 30,
        padding: 10,
    },
    multilineText: {
        minHeight: 100,
        textAlignVertical: 'top'
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    form: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginBottom: 50
    },
    errorText: {
        color: 'red',
        marginBottom: 10
    }
});
