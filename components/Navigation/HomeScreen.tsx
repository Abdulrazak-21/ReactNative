import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.centerText}>
      {/* <Text style={styles.upperText}>Home Screen</Text> */}
      <Text style={styles.upperText}>Welcome to this app</Text>
      <View style={styles.HomeScreenButton}>
        <Button
          title="Go to Spotify"
          onPress={() => navigation.navigate('Spotify Screen')}
        />
      </View>
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate('Details')}
      />
      <View style={styles.HomeScreenButton}>
        <Button
          title="Go to Check Out Screen"
          onPress={() => navigation.navigate('CheckOut Screen')}
        />
      </View>
      <View style={styles.HomeScreenButton}>
        <Button
          title="Go to Timer Screen"
          onPress={() => navigation.navigate('Timer Screen')}
        />
      </View>
      <View style={styles.HomeScreenButton}>
        <Button
          title="Go to CanaraBank Screen"
          onPress={() => navigation.navigate('CanaraBank Screen')}
        />
      </View>
      <View style={styles.HomeScreenButton}>
        <Button
          title="Go to Todo Screen"
          onPress={() => navigation.navigate('Todo Screen')}
        />
      </View>
      <View style={styles.HomeScreenButton}>
        <Button
          title="Go to Timer Screen"
          onPress={() => navigation.navigate('Timer Screen')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  upperText: {
    //padding: 100,
    //flex: 0.5,
    color: '#000',
    paddingBottom: 15,
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HomeScreenButton: {
    // flexDirection: 'column',
    // alignContent: 'space-between',
    paddingBottom: 10,
    marginTop: 10,
  },
});


export default HomeScreen;
