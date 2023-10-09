import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailScreen } from '../screens/DetailScreen';
import { Article } from '../interfaces/newsInterface';
import { TabsNavigator } from './TabsNavigation';
import { HomeScreen } from '../screens/HomeScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';


export type RootStackParams = {
    Home: undefined,
    TabsNavigator: undefined,
    Favorites: undefined,
    DetailScreen: Article,

}

const Stack = createStackNavigator<RootStackParams>();

export const HomeStackNavigation = () => {


    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
    );
}