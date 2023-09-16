import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'

type Category = {
    name: string;
    onPress: () => void;
};

export const Categories = ({ getNewsByCategory, setCategoryPressed }: any) => {

    const handlePress = (text: string) => {
        getNewsByCategory(text)
        setCategoryPressed(true)
    }

    const handlePressGeneral = () => {
        setCategoryPressed(false)
    }

    const categories: Category[] = [
        { name: 'Argentina', onPress: () => handlePressGeneral() },
        { name: 'Business', onPress: () => handlePress('business') },
        { name: 'Entertainment', onPress: () => handlePress('entertainment') },
        { name: 'Health', onPress: () => handlePress('health') },
        { name: 'Science', onPress: () => handlePress('science') },
        { name: 'Sports', onPress: () => handlePress('sports') },
        { name: 'Technology', onPress: () => handlePress('technology') },
    ];

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginHorizontal: 5 }}>
            {categories.map((category, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={0.4}
                    onPress={category.onPress}
                    style={styles.container}
                >
                    <Text style={{ alignSelf: 'center' }}>{category.name}</Text>
                </TouchableOpacity>
            ))}
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
