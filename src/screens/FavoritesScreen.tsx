import React, { useEffect } from 'react'
import { Text, View, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppSelector } from '../redux/redux-hooks/redux-hooks';
import { NewsCards } from '../components/NewsCards';
import { useNavigation, useRoute } from '@react-navigation/native';

export const FavoritesScreen = () => {

    const route = useRoute()
    console.log("🚀 ~ file: FavoritesScreen.tsx:11 ~ FavoritesScreen ~ route:", route.name)
    const favoriteNews = useAppSelector(state => state.newsReducer)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Favorites</Text>
            </View>
            <FlatList
                data={favoriteNews}
                renderItem={({ item, index }: any) => <NewsCards article={item} key={`news-${index}`} route={route.name} />}
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
