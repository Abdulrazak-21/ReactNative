import * as React from 'react';
import {useState} from 'react';
import { View, Text, Button, StyleSheet, Alert, SafeAreaView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
function CounterScreen({navigation}){
    var[counter, setcounter]=useState(0);
    return(
        <View style={styles.Sty}>
            <Text style={{color:'#000000',fontSize:45,fontWeight:'bold',paddingBottom:10}}>
                {counter}</Text>
            <View style={{paddingBottom:15,height:50,width:50,}}>
            <Button color="#000000" onPress={()=>{counter=counter+1 
            setcounter(counter)}}
            title="+"></Button>
            </View>
            {/* <Button onPress={()=>{counter=counter+1}} */}
            <View style={{paddingBottom:15,height:50,width:50}}>
            <Button color="#000000" onPress={()=>{counter=counter - 1
            setcounter(counter)}}
            title="-"></Button>
            </View>
            <View style={{paddingBottom:15,height:50,width:"50%"}}>
            <Button  onPress={()=>{counter=0
            setcounter(counter)}}
            title="Reset"></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    fixToText: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    Sty:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    CounterText:{
        fontSize:45,
        fontWeight:'bold'
        
    },
});
export default CounterScreen;