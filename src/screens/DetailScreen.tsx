import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity, Linking, SafeAreaView } from 'react-native'
import { RootStackParams } from '../navigation/Navigation'
import { Divider } from '../utils/Divider'


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen = ({ route }: Props) => {

    const article = route.params
    console.log("🚀 ~ file: DetailScreen.tsx:13 ~ DetailScreen ~ article:", article)

    const uri = article.urlToImage !== null ? article.urlToImage : 'https://picsum.photos/seed/picsum/200/300'

    const handleOpenURL = () => {
        Linking.openURL(article.url);
    };

    return (
        <SafeAreaView style={styles.detailContainer}>
            <Text style={styles.titleText}>{article.title}</Text>
            <Text style={styles.descriptionText}>{article.description}</Text>
            <Divider />
            <Text style={styles.authorText}>{article.author}</Text>
            <Divider />
            <Image
                source={{ uri }}
                style={styles.image}
            />
            <Text style={styles.urlText}>View full article at:</Text>
            <TouchableOpacity onPress={handleOpenURL} style={{ marginTop: 5 }}>
                <Text style={styles.linkText}>{article.url}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    detailContainer: {

        height: '100%',
        margin: 15,
    },
    image: {
        height: 200,
        marginTop: 10,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        color: 'black'
    },
    descriptionText: {
        fontSize: 14,
        fontFamily: 'Helvetica',
        marginVertical: 10

    },
    authorText: {
        fontSize: 12,
        alignSelf: 'flex-end'
    },
    urlText: {
        marginTop: 5,
        fontSize: 14,
    },
    linkText: {
        color: 'blue',
        textDecorationLine: 'none',
    },
})