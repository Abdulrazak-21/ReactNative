import * as React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import LikedSongData from '../../assets/Data/LikedSongData';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import PopularAlbum from '../../assets/Data/PopularAlbum';

const Spotify = ({ navigation }) => {
    const renderLikedSongData = ({ item }) => {
        return (
            <View style={[styles.ImageWrapper, { backgroundColor: item.selected ? '#F5CA48' : '#fff', }]}>
                <Image style={styles.LikedSongImage} source={item.image} />
                <Text style={styles.LikedSongtitle}>{item.title}</Text>
            </View>
        );
    };
    const renderShowsToTry = ({ item }) => {
        return (
            <View style={[styles.ShowToTryWrapper, {
                backgroundColor: item.selected ? '#F5CA48' : '#fff', borderRadius: 10,
            }]}>
                <Image style={styles.ShowToTryImage} source={item.image} />
                <Text style={styles.ShowToTryText}>{item.title}</Text>
            </View>
        );
    };
    const renderPopularAlbum = ({ item }) => {
        return (
            <View style={[styles.ShowToTryWrapper, {
                backgroundColor: item.selected ? '#F5CA48' : '#fff', borderRadius: 0,
            }]}>
                <Image style={styles.ShowToTryImage} source={item.image} />
                {/* source={{ uri: item.image }} */}
                <Text style={styles.ShowToTryText}>{item.title}</Text>
            </View>
        );
    };
    function onPress() {
        //navigation.navigate('Home')
        Alert.alert("This is homescreen")
    }
    function onPressHome() {
        navigation.navigate('HomeScreen')
    }
    return (
        <View style={styles.container}>
            <SafeAreaView>
                {/* {Top Greeting Text} */}
                <View style={styles.topTextWrapper}>
                    <Text style={styles.GreetingText}>Spotify Screen</Text>
                    <View style={styles.topWrapperIcons}>
                        <Feather style={styles.Icon} name="bell" size={24} color="#003" onPress={onPress} />
                        <Feather style={styles.Icon} name="clock" size={24} color="#003" />
                        <Feather style={[styles.Icon, { paddingRight: -10, }]} name="settings" size={24} color="#003" />
                    </View>
                </View>
            </SafeAreaView>
            {/* {LikedSong Flatlist} */}
            <View style={styles.LikedSongWrapper}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={LikedSongData}
                    renderItem={renderLikedSongData}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
            {/* {Shows to Try Screen} */}
            <View style={styles.TextShow}>
                <Text style={styles.TextShowsToTry}>Shows to Try</Text>
            </View>
            <View style={styles.ShowsToTryImageWrapper}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={LikedSongData}
                    renderItem={renderShowsToTry}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>

            {/* {Popular Album} */}
            <View style={styles.TextShow}>
                <Text style={styles.TextShowsToTry}>Popular Album</Text>
            </View>
            <View style={styles.ShowsToTryImageWrapper}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={PopularAlbum}
                    renderItem={renderPopularAlbum}
                    keyExtractor={item => '{item.id}'}
                    horizontal={true}
                />
            </View>
            {/* {Bottom Button Implemented} */}
            <View style={styles.centerText}>
                <Button
                    title="Go to HomeScreen" color='#000'
                    onPress={() => navigation.goBack()}
                />
                <Button
                    title="Go to NextPage" color='#000'
                    onPress={() => Alert.alert("Add Next Page First")}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topTextWrapper: {
        //backgroundColor: '#fff',
        marginTop: 0,
        height: 60,
        width: '100%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        position: 'absolute',
        //bottom: 0

    },
    GreetingText: {
        //backgroundColor: '#000',
        color: '#000',
        fontWeight: '700',
        fontSize: 18,
    },
    topWrapperIcons: {
        justifyContent: 'space-evenly',
        alignContent: 'space-between',
        flexDirection: 'row',

        //marginRight: 15,
        //backgroundColor: '#000',
    },
    Icon: {
        justifyContent: 'space-between',
        paddingRight: 20,
    },
    LikedSongWrapper: {
        //backgroundColor: '#F5CA48',
        padding: 10,
        //marginRight: 20,
        // borderRadius: 20,
        //borderColor: '#000',
        // borderWidth: 1,
        marginTop: 70,
        alignItems: 'center',
        alignContent: 'center',

    },
    LikedSongImage: {
        //paddingRight: 10,
        backgroundColor: '#789'
    },
    ImageWrapper: {
        //backgroundColor: '#fff',
        padding: 20,
        height: 90,
        width: 200,
        flexDirection: 'row',
        marginRight: 20,
        borderRadius: 15,
    },
    LikedSongtitle: {
        textAlign: 'center',
        fontWeight: '700',
        //padding: 10,
        marginTop: 15,
        marginLeft: 10,
    },
    TextShowsToTry: {
        fontSize: 18,
        color: '#000',
        fontWeight: '700',
    },
    TextShow: {
        marginLeft: 10,
    },
    ShowsToTryImageWrapper: {
        // height: 150,
        // width: "100%",
        // backgroundColor: '#000',

    },
    ShowToTryImage: {
        height: 150,
        width: 150,
        alignContent: 'center',
        alignItems: 'center',

    },
    ShowToTryText: {
        fontSize: 12,
        textAlign: 'center',
    },
    ShowToTryWrapper: {
        // height: 250,
        // width: 150,
        //borderColor: '#000',
        marginTop: 10,
        marginLeft: 10,
        //backgroundColor: '#000',
        // overflow: 'hidden',
        padding: 20,
        height: 200,
        width: 180,
        marginRight: 5,
    },
    centerText: {
        //height: 100,
        paddingTop: 25,
        padding: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        //backgroundColor: '#000',
        borderRadius: 15,
    },
});


export default Spotify;