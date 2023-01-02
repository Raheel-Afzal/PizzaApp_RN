import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import COLORS from './src/consts/colors';
import DetailsScreen from './src/views/screens/DetailsScreen';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import Login from './src/views/screens/Login';
import SignUp from './src/views/screens/SignUp';
import CartScreen from './src/views/screens/CartScreen';
import HomeScreen from './src/views/screens/HomeScreen';
import BottomCartCard from './src/views/components/BottomCartCard';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="LoginNavigation" component={Login} />
        <Stack.Screen name="SignUpNavigation" component={SignUp} />
        {/* <Stack.Screen name="Home" component={BottomNavigator} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeCartCard" component={BottomCartCard}/>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
