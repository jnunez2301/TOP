import * as React from 'react';
import { Button, Pressable, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from './screens/HomeScreen';
import { AboutScreen } from './screens/AboutScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={
              {
                title: "Welcome home",
                headerStyle: {
                  backgroundColor: "#6a51ae",
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: "bold",
                },
                headerRight: () => {
                  return (
                    <Pressable onPress={() =>  alert("Menu btn pressed!")}>
                      <Text style={{color: '#fff', fontSize: 16}}>Menu</Text>
                    </Pressable>
                  )
                },
                /* headerLeft: () => {
                  return (
                    <Pressable onPress={() =>  alert("Menu btn pressed!")}>
                      <Text style={{color: '#fff', fontSize: 16}}>Left</Text>
                    </Pressable>
                  )
                }, */
                contentStyle: {
                  backgroundColor: "#e8e4"
                }
              }
            }>
            <Stack.Screen name="Home" component={HomeScreen} options={{/* Same as its parent screenOptions */}}
            />
            <Stack.Screen name="About" component={AboutScreen} initialParams={
              {name: 'guest'}
            }/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App