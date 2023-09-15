import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity, View } from 'react-native'


export const Categories = ({ getNewsByCategory, setCategoryPressed }: any) => {

    const handlePress = (text: string) => {
        getNewsByCategory(text)
        setCategoryPressed(true)
    }

    const handlePressGeneral = () => {
        setCategoryPressed(false)
    }


    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginHorizontal: 5 }}>
            <TouchableOpacity

                activeOpacity={0.4}
                onPress={() => handlePressGeneral()}
                style={styles.container}
            >
                <Text style={{ alignSelf: 'center' }}>Argentina</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => handlePress('business')}
                style={styles.container}
            >
                <Text style={{ alignSelf: 'center' }}>Business</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => handlePress('entertainment')}
                style={styles.container}
            >
                <Text style={{ alignSelf: 'center' }}>Entertainment</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => handlePress('health')}
                style={styles.container}
            >
                <Text style={{ alignSelf: 'center' }}>Health</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => handlePress('science')}
                style={styles.container}
            >
                <Text style={{ alignSelf: 'center' }}>Science</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => handlePress('sports')}
                style={styles.container}
            >
                <Text style={{ alignSelf: 'center' }}>Sports</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => handlePress('technology')}
                style={styles.container}
            >
                <Text style={{ alignSelf: 'center' }}>Technology</Text>
            </TouchableOpacity>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        height: 35,
        width: 100,
        backgroundColor: '#C6C7C4',
        padding: 5,
        marginTop: 15,
        borderRadius: 3
    }
})
