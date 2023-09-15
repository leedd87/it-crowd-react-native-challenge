import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNews } from '../hooks/useNews';

import { SafeAreaView } from 'react-native-safe-area-context';
import { getNewsByCategoryApi } from '../api/newsApi';
import { Article, News } from '../interfaces/newsInterface';
import { NewsCards } from '../components/NewsCards';


export const HomeScreen = () => {
    const navigation = useNavigation();
    const [categoryPressed, setCategoryPressed] = useState(false)
    const [newsByCategory, setNewsByCategory] = useState<Article[]>([])

    const { news, isLoading } = useNews()

    const getNewsByCategory = async (category: string) => {
        const resp = await getNewsByCategoryApi.get<News>(`/v2/top-headlines`, { params: { category } })
        setNewsByCategory(resp.data.articles)
    }

    const handlePress = (text: string) => {
        console.log(text)
        getNewsByCategory(text)
        setCategoryPressed(true)
        console.log('----------------', newsByCategory)
        console.log('----------------', categoryPressed)
    }

    const handlePressGeneral = () => {
        setCategoryPressed(false)
    }

    useEffect(() => {
        //getNewsByCategory('sports')
    }, [newsByCategory])



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
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity
                    onPress={() => handlePressGeneral()}
                    activeOpacity={0.8}
                    style={{
                        width: 75,
                        backgroundColor: '#C6C7C4',
                        padding: 5,
                        marginTop: 10,
                        borderRadius: 3
                    }}
                >
                    <Text style={{ alignSelf: 'center' }}>Argentina</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handlePress('business')}
                    activeOpacity={0.8}
                    style={{
                        width: 70,
                        backgroundColor: '#C6C7C4',
                        padding: 5,
                        marginTop: 10,
                        borderRadius: 5
                    }}
                >
                    <Text style={{ alignSelf: 'center' }}>Business</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handlePress('health')}
                    activeOpacity={0.8}
                    style={{
                        width: 70,
                        backgroundColor: '#C6C7C4',
                        padding: 5,
                        marginTop: 10,
                        borderRadius: 5
                    }}
                >
                    <Text style={{ alignSelf: 'center' }}>Health</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handlePress('science')}
                    activeOpacity={0.8}
                    style={{
                        width: 70,
                        backgroundColor: '#C6C7C4',
                        padding: 5,
                        marginTop: 10,
                        borderRadius: 5
                    }}
                >
                    <Text style={{ alignSelf: 'center' }}>Science</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handlePress('sports')}
                    activeOpacity={0.8}
                    style={{
                        width: 70,
                        backgroundColor: '#C6C7C4',
                        padding: 5,
                        marginTop: 10,
                        borderRadius: 5
                    }}
                >
                    <Text style={{ alignSelf: 'center' }}>Sports</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={categoryPressed ? newsByCategory : news}
                renderItem={({ item, index }: any) => <NewsCards article={item} key={`news-${index}`} />}
                style={{ marginTop: 10 }}
            />


            {/* //TESTING borrar lo de abajo */}
            {/* <Button
                title="Ir a favoritos"
                onPress={() => {
                    navigation.navigate('FavoritesScreen');
                }}
            /> */}
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