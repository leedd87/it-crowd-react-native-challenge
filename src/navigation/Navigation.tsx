import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Article } from '../interfaces/newsInterface';
import { TabsNavigator } from './TabsNavigation';

export type RootStackParams = {
    Home: undefined,
    TabsNavigator: undefined,
    //TODO
    // Favorites: []
    Favorites: undefined,
    DetailScreen: Article
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
            <Stack.Screen name="TabsNavigator" component={TabsNavigator} />
            {/* <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} /> */}
            <Stack.Screen name="DetailScreen" component={DetailScreen} />

        </Stack.Navigator>
    );
}