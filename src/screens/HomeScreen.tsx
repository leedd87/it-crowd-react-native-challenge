import React, { useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useNews } from '../hooks/useNews';

import { SafeAreaView } from 'react-native-safe-area-context';
import { getNewsByCategoryApi } from '../api/newsApi';
import { Article, News } from '../interfaces/newsInterface';

import { Categories } from '../components/Categories'
import { useRoute } from '@react-navigation/native';
import { NewsCards } from '../components/NewsCards';


export const HomeScreen = () => {

    const [categoryPressed, setCategoryPressed] = useState(false)
    const [newsByCategory, setNewsByCategory] = useState<Article[]>([])

    const { news, isLoading } = useNews()
    const route = useRoute()
    console.log("🚀 ~ file: HomeScreen.tsx:21 ~ HomeScreen ~ route:", route)

    const getNewsByCategory = async (category: string) => {
        const resp = await getNewsByCategoryApi.get<News>(`/v2/top-headlines`, { params: { category } })
        setNewsByCategory(resp.data.articles)
    }

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color='red' size={50} />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>News App</Text>
            </View>
            <Categories getNewsByCategory={getNewsByCategory} setCategoryPressed={setCategoryPressed} />
            <FlatList
                data={categoryPressed ? newsByCategory : news}
                renderItem={({ item, index }: any) => <NewsCards article={item} key={`news-${index}`} route={route.name} />}
                style={{ marginTop: 10 }}
            />
        </SafeAreaView>
    );
};

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