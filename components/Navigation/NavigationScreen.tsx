import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '@react-navigation/stack';


import HomeScreen from '../Navigation/HomeScreen';
import CounterScreen from '../Navigation/CounterScreen';
import Spotify from '../Navigation/Spotify';
import CheckOutScreen from '../Navigation/CheckOutScreen';
import Timer from './Timer';
import CanaraBank from '../Navigation/CanaraBank';
import TodoApp from './TodoApp';


const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Details" component={CounterScreen} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="Spotify Screen" component={Spotify} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="CheckOut Screen" component={CheckOutScreen} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="Timer Screen" component={Timer} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="CanaraBank Screen" component={CanaraBank} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="Todo Screen" component={TodoApp} options={{
                    headerShown: false,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationScreen;