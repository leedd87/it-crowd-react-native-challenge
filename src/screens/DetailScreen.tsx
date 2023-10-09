import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity, Linking, SafeAreaView } from 'react-native'
import { RootStackParams } from '../navigation/Navigation'
import { Divider } from '../components/ui/Divider'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen = ({ route }: Props) => {

    const { goBack } = useNavigation()

    const article = route.params

    const uri = article.urlToImage !== null ? article.urlToImage : 'https://loremflickr.com/320/240'

    const handleOpenURL = () => {
        Linking.openURL(article.url);
    };

    return (
        <SafeAreaView>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backIcon} onPress={() => goBack()}>
                    <Icon name='arrow-back-outline' size={25} color='white' />
                </TouchableOpacity>
                <Text style={styles.detailText}>News App</Text>
            </View>
            <View style={styles.detailContainer}>
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
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: '#586A6A',
        paddingVertical: 10,
        alignItems: 'center',
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
    backIcon: {
        marginRight: 16,
    },
})