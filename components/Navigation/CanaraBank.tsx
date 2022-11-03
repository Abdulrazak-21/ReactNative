import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Header from '../../constants/header';

const onPress = () => {
    return (
        Alert.alert('Upi')
    )
}

const CanaraBank = (navigation) => {
    return (
        <View>
            {/* Header */}
            <Header
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                username="Abdulrazak"
            />
            {/* {My Portfolio} */}

            <View style={styles.PortFolioWrapper}>
                <View style={{ padding: 15, }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#000' }}>My PortFolio</Text>
                </View>
            </View>

            {/* {Pay and Transfer} */}

            <Text style={{ padding: 10, fontWeight: '600', color: '#000' }}>
                Pay & Transfer
            </Text>
            <View style={styles.ConstantWrapper}>
            </View>

            {/* {UPI} */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
                <Text style={{ fontWeight: '600', color: '#000' }}>
                    UPI
                </Text>
                <View style={{}}>
                    <Button title='Click Here' onPress={onPress} />
                </View>
            </View>
            <View style={styles.ConstantWrapper}>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    PortFolioWrapper: {
        marginTop: 10,
        height: 200,
        width: 350,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#d1e0e0',
    },
    ConstantWrapper: {
        alignSelf: 'center',
        borderRadius: 15,
        height: 120,
        width: 370,
        backgroundColor: '#fff'
    },
})

export default CanaraBank;