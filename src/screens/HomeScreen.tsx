import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Button, FlatList, ListRenderItem, Text, View } from 'react-native';
import { useNews } from '../hooks/useNews';
import { NewsCards } from '../components/newsCards';
import { SafeAreaView } from 'react-native-safe-area-context';


export const HomeScreen = () => {
    const navigation = useNavigation();

    const { news, isLoading } = useNews()

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color='red' size={50} />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <FlatList
                data={news}
                renderItem={({ item, index }: any) => <NewsCards article={item} key={`news-${index}`} />}
                style={{ marginTop: 10 }}
            />

            {/* <NewsCards
                article={news[0]}
            /> */}

            <Button
                title="Ir a favoritos"
                onPress={() => {
                    navigation.navigate('FavoritesScreen');
                }}
            />
        </SafeAreaView>
    );
};
