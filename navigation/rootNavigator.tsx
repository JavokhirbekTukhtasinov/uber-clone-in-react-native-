import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
const RootNavigator = () => {
  const Stack = createStackNavigator();
    return (
        <Stack.Navigator  initialRouteName='Home'>
            <Stack.Screen  name="Map" component={MapScreen} />
            <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default RootNavigator;
