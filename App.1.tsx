import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { store } from './src/store/store';

export const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        </Provider>
    );
};
