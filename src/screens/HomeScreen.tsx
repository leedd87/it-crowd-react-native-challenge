import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Button, FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
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
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>News App</Text>
            </View>

            <FlatList
                data={news}
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
        backgroundColor: 'blue',
        paddingVertical: 10, // Espacio vertical alrededor del texto
        alignItems: 'center', // Centra el texto horizontalmente
    },
    titleText: {
        fontSize: 24, // Tamaño de fuente
        fontWeight: 'bold', // Peso de fuente en negrita
        color: 'white', // Color de texto
        fontFamily: 'Helvetica', // Puedes cambiar la fuente según tus preferencias
    },
});