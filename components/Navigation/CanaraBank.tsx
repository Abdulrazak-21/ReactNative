import React from 'react';
import { View, Text, StyleSheet, Button, Alert, FlatList, Image } from 'react-native';
import Header from '../../constants/header';
import PayandTransfer from '../../assets/CanaraBank/Data/Pay&Transfer';

const onPress = () => {
    return (
        Alert.alert('Upi')
    )
}
// const PayandTrasnferRender = ({ item }) => {
//     return (
//         <View style={{ flexDirection: 'row', }}>
//             <View style={{ flexDirection: 'column' }}>
//                 <Image style={{ height: 30, resizeMode: 'contain', alignContent: 'center', }} source={item.image} />
//                 <Text >{item.title}</Text>
//             </View>
//         </View>
//     );
// };

const WrapperCardRender = ({ item }) => {
    return (
        <View style={{ alignContent: 'space-around', }}>
            <View style={styles.PayandTransferWrapper}>
                <Image style={styles.PayandTransferImage} source={item.image} />
                <Text style={{ fontSize: 11, fontWeight: '500', }}>{item.title}</Text>
            </View>
        </View>
    );
};

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

            <Text style={{ padding: 10, fontWeight: '600', color: '#000' }}>Pay & Transfer</Text>
            <View style={styles.ConstantWrapper}>
                <FlatList
                    data={PayandTransfer.slice(0, 8)}
                    renderItem={WrapperCardRender}
                    numColumns={4}
                    keyExtractor={item => item.id}
                />
            </View>

            {/* {UPI} */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
                <Text style={{ fontWeight: '600', color: '#000' }}>
                    UPI
                </Text>
                <View style={{}}>
                    <Button title='Click Here' onPress={() => { Alert.alert("UPI") }} />
                </View>
            </View>
            <View style={styles.ConstantWrapper}>
                <FlatList
                    data={PayandTransfer.slice(0, 6)}
                    renderItem={WrapperCardRender}
                    numColumns={4}
                    keyExtractor={item => item.id}
                />
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
    PayandTransferWrapper: {
        height: 60,
        width: 100,
        justifyContent: 'center',
        //backgroundColor: '#679',
        flexShrink: 1,
    },
    PayandTransferImage: {
        resizeMode: 'contain',
        height: 30,
        width: 30,
        //backgroundColor: '#fff',
        marginTop: 10,
        marginLeft: 15,

    },
})

export default CanaraBank;