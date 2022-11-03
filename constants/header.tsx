import React from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

function onPress() {
    //navigation.navigate('Home')
    Alert.alert("Header Button Pressed")
}
const Header = (props) => {
    return (
        <View style={styles.HeaderContainer}>
            <View>
                <Image style={styles.LeftImage}
                    source={props.source}
                />
            </View>
            <View style={{ justifyContent: 'center' }}>
                <Text style={styles.HeaderUserName}>{props.username}</Text>
            </View>
            <View style={styles.HeaderIcon}>
                <Feather style={{ paddingRight: 10, }} name="search" size={24} color="#0099ff" onPress={onPress} />
                <Feather style={{ paddingRight: 10, }} name="bell" size={24} color="#0099ff" onPress={onPress} />
                <Feather style={{ paddingRight: 10, }} name="log-out" size={24} color="#0099ff" onPress={onPress} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    HeaderContainer: {
        backgroundColor: '#fff',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    LeftImage: {
        height: 45,
        width: 45,
        borderRadius: 50,
    },
    HeaderUserName: {
        fontSize: 15,
        fontWeight: '700',
        color: '#000',
        textAlign: 'center',
    },
    HeaderIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },

})

export default Header;