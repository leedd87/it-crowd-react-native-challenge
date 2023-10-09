import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { useAppSelector } from '../redux/redux-hooks/redux-hooks';
import { NewsCards } from '../components/NewsCards';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const FavoritesScreen = () => {

    const { goBack } = useNavigation()

    const route = useRoute()

    const favoriteNews = useAppSelector(state => state.newsReducer)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backIcon} onPress={() => goBack()}>
                    <Icon name='arrow-back-outline' size={25} color='white' />
                </TouchableOpacity>
                <Text style={styles.detailText}>Favorites</Text>
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
    backIcon: {
        marginRight: 16,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#586A6A',
    },
    detailText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    detailContainer: {
        height: '100%',
        margin: 15,
    },
});
