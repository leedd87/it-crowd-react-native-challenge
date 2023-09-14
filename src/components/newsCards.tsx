import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Article } from '../interfaces/newsInterface'

interface Props {
    article: Article
}

export const NewsCards = ({ article }: Props) => {

    const uri = article.urlToImage !== null ? article.urlToImage : 'https://picsum.photos/seed/picsum/200/300'


    return (
        <View style={{
            height: 230,
            marginHorizontal: 15,
            marginVertical: 5,
            borderRadius: 18
        }}>
            <Image
                source={{ uri }}
                style={styles.image}
            />
            <Text>{article.title}</Text>
            <View style={styles.line}></View>

        </View>
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