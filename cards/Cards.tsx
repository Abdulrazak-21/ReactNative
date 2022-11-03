import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Cards = (props) => {
    return (
        <View >
            {/* <Text>First Name</Text>
            <Text>{props.FirstName}</Text>
            <Text>Last Name</Text>
            <Text>{props.LastName}</Text> */}
            <TextInput style={styles.input}
                placeholder={props.PlaceHolder}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
});

export default Cards