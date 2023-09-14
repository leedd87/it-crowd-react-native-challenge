import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Divider = () => {
    return (
        <View style={styles.line}></View>
    )
}

const styles = StyleSheet.create({
    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginVertical: 10,
    }
})