import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { RootStackParams } from './Navigation';
import { Text } from 'react-native';


const Tab = createBottomTabNavigator<RootStackParams>();

export const TabsNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: 'blue',
                tabBarStyle: {
                    borderTopColor: 'blue',
                    borderTopWidth: 1
                },
                tabBarLabelStyle: {
                    fontSize: 12
                },
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Home':
                            iconName = 'T1'
                            break;
                        case 'Favorites':
                            iconName = 'T2'
                            break;
                    }
                    return <Text style={{ color: 'red' }}>{iconName}</Text>
                }
            })}
        >
            <Tab.Screen name="Home" options={{ title: 'Home' }} component={HomeScreen} />
            <Tab.Screen name="Favorites" options={{ title: 'Favorites' }} component={FavoritesScreen} />
        </Tab.Navigator>
    );
}