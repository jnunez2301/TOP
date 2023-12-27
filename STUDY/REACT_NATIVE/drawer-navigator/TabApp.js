import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashBoardScreen } from "./screens/DashboardScreen";
import { SettingsScreen } from "./screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export const TabApps = () =>{
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Dashboard" component={DashBoardScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}