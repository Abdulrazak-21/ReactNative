import React from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Cards from "../../cards/Cards";


const CheckOutScreen = () => {
    return (
        <View>
            <Cards
                PlaceHolder="First Name"
            />
            <Cards
                PlaceHolder="Last Name"
            />
            <Cards
                PlaceHolder="Email"
            />
            <Cards
                PlaceHolder="PhoneNumber"
            />
            <View style={{ padding: 10, }}>
                <TouchableOpacity style={styles.CheckOutButton}
                    onPress={() => Alert.alert('CheckOut Button Pressed')}
                >
                    <Text>CheckOut</Text>

                    {/* onPress={() => Alert.alert('CheckOut Button Pressed')} */}
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    CheckOutButton: {
        height: 40,
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default CheckOutScreen;