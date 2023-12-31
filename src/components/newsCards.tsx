import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Article } from '../interfaces/newsInterface'
import { useNavigation } from '@react-navigation/native'
import { Divider } from './ui/Divider'
import { useAppDispatch } from '../redux/redux-hooks/redux-hooks'
import Icon from 'react-native-vector-icons/Ionicons';
import { addToFavorites, removeFromFavorites } from '../redux/newsSlices'

interface Props {
    article: Article
    route: string
}

export const NewsCards = ({ article, route }: Props) => {

    const navigation = useNavigation()
    const dispatch = useAppDispatch()

    const { urlToImage, url, author, title, content, description, publishedAt } = article
    //console.log(testing)

    const uri = article.urlToImage !== null ? article.urlToImage : 'https://loremflickr.com/320/240'

    const handleAddToArticle = () => {
        dispatch(addToFavorites({
            url: article.url,
            author: article.author,
            title: article.title,
            urlToImage: article.urlToImage,
            content: article.content,
            description: article.description,
            publishedAt: article.publishedAt
        }))
    }

    const handleRemoveArticle = () => {
        dispatch(removeFromFavorites({ url: article.url }))
    }

    return (
        <View>
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
            </TouchableOpacity>

            {
                route === 'Home' ?
                    (<TouchableOpacity
                        onPress={handleAddToArticle}
                        activeOpacity={0.4}
                        style={{
                            width: 30,
                            height: 30,
                            marginHorizontal: 15,
                            marginVertical: 5,
                            borderRadius: 5,
                            backgroundColor: '#846A6A',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Icon name="heart-outline" size={25} color="#EEF0F2" />
                    </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            onPress={handleRemoveArticle}
                            activeOpacity={0.4}
                            style={{
                                width: 30,
                                height: 30,
                                marginHorizontal: 15,
                                marginVertical: 5,
                                borderRadius: 5,
                                backgroundColor: '#846A6A',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Icon name="trash-bin-outline" size={25} color="#EEF0F2" />
                        </TouchableOpacity>
                    )
            }
            <Divider />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,

    }
})