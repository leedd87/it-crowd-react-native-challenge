import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { RootStackParams } from './Navigation';
import { Platform, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DetailScreen } from '../screens/DetailScreen';
import { HomeStackNavigation } from './HomeStackNavigation';



const Tab = createBottomTabNavigator<RootStackParams>();


export const TabsNavigator = () => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#818d92',
                tabBarStyle: {
                    borderTopColor: '#818d92',
                    borderTopWidth: 1,
                    backgroundColor: '#818d92'
                },
                tabBarLabelStyle: {
                    display: 'none'
                },
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Home':
                            iconName = 'home-outline'
                            break;
                        case 'Favorites':
                            iconName = 'heart-outline'
                            break;
                        // case 'DetailScreen':
                        //     iconName = 'heart-outline'
                        //     break;
                    }

                    return Platform.OS === 'ios'
                        ?
                        <Icon name={iconName} size={25} color={"white"} style={{ marginTop: 25 }} />

                        :
                        <Icon name={iconName} size={25} color={"white"} />

                }
            })}
        >
            {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
            <Tab.Screen name="Home" component={HomeStackNavigation} />
            {/* <Tab.Screen name="DetailScreen" component={DetailScreen} /> */}
            <Tab.Screen name="Favorites" component={FavoritesScreen} />

        </Tab.Navigator>
    );
}

