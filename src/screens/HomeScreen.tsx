import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import { useNews } from '../hooks/useNews';


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
