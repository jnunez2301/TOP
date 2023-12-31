import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, AboutScreen } from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const RNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="About" component={AboutScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
