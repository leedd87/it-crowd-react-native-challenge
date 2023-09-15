import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Article } from '../interfaces/newsInterface'
import { useNavigation } from '@react-navigation/native'
import { Divider } from '../utils/Divider'

interface Props {
    article: Article
}

export const NewsCards = ({ article }: Props) => {

    const uri = article.urlToImage.length > 10 ? article.urlToImage : 'https://picsum.photos/seed/picsum/200/300'

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
            <Text style={{ marginTop: 5 }}>{article.title}</Text>
            <Divider />

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,

    }
})