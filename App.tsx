import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './navigation/rootNavigator';
import store from './store/store';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';



const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
    </Provider>
  );
};

export default App;
const styles = StyleSheet.create({});
