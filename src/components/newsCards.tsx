import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Article } from '../interfaces/newsInterface'
import { useNavigation } from '@react-navigation/native'

interface Props {
    article: Article
}

export const NewsCards = ({ article }: Props) => {

    const uri = article.urlToImage !== null ? article.urlToImage : 'https://picsum.photos/seed/picsum/200/300'

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen', article)}
            activeOpacity={0.8}
            style={{
                height: 230,
                marginHorizontal: 15,
                marginVertical: 5,
                borderRadius: 18
            }}

        >
            <Image
                source={{ uri }}
                style={styles.image}
            />
            <Text>{article.title}</Text>
            <View style={styles.line}></View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,

    },
    line: {
        borderBottomWidth: 1, // Ancho de la línea
        borderBottomColor: 'black', // Color de la línea
        marginVertical: 10, // Margen vertical para espaciar la línea
    }
})