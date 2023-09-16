import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailScreen } from '../screens/DetailScreen';
import { Article } from '../interfaces/newsInterface';
import { TabsNavigator } from './TabsNavigation';


export type RootStackParams = {
    Home: undefined,
    TabsNavigator: undefined,
    Favorites: undefined,
    DetailScreen: Article,

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
            <Stack.Screen name="TabsNavigator" component={TabsNavigator} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
    );
}