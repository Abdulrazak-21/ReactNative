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

            <View style={{ padding: 10, }}>
                <Text style={styles.HeaderUserName}>Abdulrazak</Text>
            </View>
            <View style={styles.HeaderIcon}>
                <Feather style={{ paddingRight: 10, }} name="search" size={24} color="#003" onPress={onPress} />
                <Feather style={{ paddingRight: 10, }} name="bell" size={24} color="#003" onPress={onPress} />
                <Feather style={{ paddingRight: 10, }} name="log-out" size={24} color="#003" onPress={onPress} />
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
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    HeaderUserName: {
        fontSize: 15,
        fontWeight: '700',
        color: '#000',
    },
    HeaderIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },

})

export default Header;