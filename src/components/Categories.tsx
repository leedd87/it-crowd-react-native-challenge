import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Categories = ({ getNewsByCategory, setCategoryPressed }: any) => {

    const handlePress = (text: string) => {
        getNewsByCategory(text)
        setCategoryPressed(true)
    }

    const handlePressGeneral = () => {
        setCategoryPressed(false)
    }


    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <TouchableOpacity
                onPress={() => handlePressGeneral()}
                activeOpacity={0.8}
                style={{
                    width: 75,
                    backgroundColor: '#C6C7C4',
                    padding: 5,
                    marginTop: 10,
                    borderRadius: 3
                }}
            >
                <Text style={{ alignSelf: 'center' }}>Argentina</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handlePress('business')}
                activeOpacity={0.8}
                style={{
                    width: 70,
                    backgroundColor: '#C6C7C4',
                    padding: 5,
                    marginTop: 10,
                    borderRadius: 5
                }}
            >
                <Text style={{ alignSelf: 'center' }}>Business</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handlePress('health')}
                activeOpacity={0.8}
                style={{
                    width: 70,
                    backgroundColor: '#C6C7C4',
                    padding: 5,
                    marginTop: 10,
                    borderRadius: 5
                }}
            >
                <Text style={{ alignSelf: 'center' }}>Health</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handlePress('science')}
                activeOpacity={0.8}
                style={{
                    width: 70,
                    backgroundColor: '#C6C7C4',
                    padding: 5,
                    marginTop: 10,
                    borderRadius: 5
                }}
            >
                <Text style={{ alignSelf: 'center' }}>Science</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handlePress('sports')}
                activeOpacity={0.8}
                style={{
                    width: 70,
                    backgroundColor: '#C6C7C4',
                    padding: 5,
                    marginTop: 10,
                    borderRadius: 5
                }}
            >
                <Text style={{ alignSelf: 'center' }}>Sports</Text>
            </TouchableOpacity>
        </View>

    )
}
