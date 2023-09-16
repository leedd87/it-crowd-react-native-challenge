import 'react-native-gesture-handler';
import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { store } from './src/redux/store';


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App