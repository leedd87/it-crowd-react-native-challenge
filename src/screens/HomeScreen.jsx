import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../store/newsSlices/thunks';
import newsApi from '../api/newsApi';

export const HomeScreen = () => {
    const navigation = useNavigation();

    // const news = useSelector(state => state.news);
    // console.log('🚀 ~ file: HomeScreen.jsx:11 ~ HomeScreen ~ news:', news);
    // const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getNews())
        newsApi.get('/v2/top-headlines')
            .then(resp =>
                console.log(resp.data.articles))
    }, [])

    return (
        <View>
            <Text>Home Screen</Text>

            <Button
                title="Ir a favoritos"
                onPress={() => {
                    navigation.navigate('FavoritesScreen');
                }}
            />
        </View>
    );
};
