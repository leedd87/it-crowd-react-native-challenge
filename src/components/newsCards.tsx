import React from 'react'
import { Text, View } from 'react-native'
import { Article } from '../interfaces/newsInterface'

interface Props {
    article: Article
}

export const NewsCards = () => {
    return (
        <View>
            <Text>NewsCards</Text>
        </View>
    )
}
