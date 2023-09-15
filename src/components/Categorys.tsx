import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Categorys = () => {
    return (
        <TouchableOpacity
            onPress={() => console.log('general')}
            activeOpacity={0.8}
            style={{
                width: 60,
                backgroundColor: 'red',
                // marginHorizontal: 15,
                marginVertical: 5,
                borderRadius: 5
            }}

        >
            <Text style={{ alignSelf: 'center' }}>General</Text>
        </TouchableOpacity>

    )
}
