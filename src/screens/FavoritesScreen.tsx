import React, { useEffect } from 'react'
import { Text, View, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppSelector } from '../redux/redux-hooks/redux-hooks';
import { NewsCards } from '../components/NewsCards';

export const FavoritesScreen = () => {

    const favoriteNews = useAppSelector(state => state.newsReducer)

    useEffect(() => {
        console.log('disparo useEffect por cambios de favoritesNews')
        console.log("🚀 ~ file: FavoritesScreen.tsx:9 ~ FavoritesScreen ~ favoriteNews:", favoriteNews.length)
    }, [favoriteNews])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Favorites</Text>
            </View>
            <FlatList
                data={favoriteNews}
                renderItem={({ item, index }: any) => <NewsCards article={item} key={`news-${index}`} />}
                style={{ marginTop: 10 }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: '#586A6A',
        paddingVertical: 10,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Helvetica',
    },
});
