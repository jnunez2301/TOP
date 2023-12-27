import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashBoardScreen } from "./screens/DashboardScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import Ionicons from "@expo/vector-icons/Ionicons"

const Tab = createBottomTabNavigator();

export const TabApps = () =>{
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
                tabBarLabelPosition: "below-icon",
                /* tabBarShowLabel: false */
                tabBarActiveTintColor: "white",
                tabBarActiveBackgroundColor: "purple",
                tabBarInactiveBackgroundColor: "lightgrey",
                
            }}>
                <Tab.Screen name="Dashboard" component={DashBoardScreen}
                options={{
                    tabBarLabel: "My Profile",
                    tabBarIcon: () => {
                        return (<Ionicons name="person" size={20} color={'white'}/>)
                    },
                    tabBarBadge: 2,
                    tabBarBadgeStyle: {
                        backgroundColor: 'plum',
                        fontWeight: "bold"
                    }
                }} />
                <Tab.Screen name="Settings" component={SettingsScreen}
                options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: () => {
                        return (<Ionicons name="settings" size={20} />)
                    }
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}