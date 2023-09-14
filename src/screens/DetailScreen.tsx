import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigation/Navigation'

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen = ({ route }: Props) => {

    const article = route.params
    console.log("🚀 ~ file: DetailScreen.tsx:11 ~ DetailScreen ~ article:", article)

    return (
        <View>
            <Text>Detail Screen</Text>
        </View>
    )
}