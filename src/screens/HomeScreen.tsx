import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';
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
            <NewsCards />

            <Button
                title="Ir a favoritos"
                onPress={() => {
                    navigation.navigate('FavoritesScreen');
                }}
            />
        </SafeAreaView>
    );
};
