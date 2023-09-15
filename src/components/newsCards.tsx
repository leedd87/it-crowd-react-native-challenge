import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Article } from '../interfaces/newsInterface'
import { useNavigation } from '@react-navigation/native'
import { Divider } from '../utils/Divider'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    article: Article
}

export const NewsCards = ({ article }: Props) => {

    const uri = article.urlToImage !== null ? article.urlToImage : 'https://loremflickr.com/320/240'

    const navigation = useNavigation()

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
            {/* //TODO Favoritos */}
            <TouchableOpacity
                onPress={() => console.log('GUARDAR')}
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
                {/* <Text style={{ alignSelf: 'center', color: '#EEF0F2' }}>Save for Later</Text> */}
                <Icon name="heart-outline" size={25} color="#EEF0F2" />
            </TouchableOpacity>
            <Divider />
        </View>

    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,

    }
})