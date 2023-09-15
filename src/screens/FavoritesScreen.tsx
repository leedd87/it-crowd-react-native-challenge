import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';

export const FavoritesScreen = () => {
    return (
        <SafeAreaView>
            <Text>Favorites Screen</Text>
            <Icon name="airplane-outline" size={80} color="#4F8EF7" />
        </SafeAreaView>
    )
}
