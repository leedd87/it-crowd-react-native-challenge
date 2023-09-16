import React, { useEffect } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppSelector } from '../redux/redux-hooks/redux-hooks';

export const FavoritesScreen = () => {

    const favoriteNews = useAppSelector(state => state.newsReducer)

    useEffect(() => {
        console.log('disparo useEffect por cambios de favoritesNews')
        console.log("🚀 ~ file: FavoritesScreen.tsx:9 ~ FavoritesScreen ~ favoriteNews:", favoriteNews.length)
    }, [favoriteNews])

    return (
        <SafeAreaView>
            <Text>Favorites Screen</Text>
            <Icon name="airplane-outline" size={80} color="#4F8EF7" />
        </SafeAreaView>
    )
}
