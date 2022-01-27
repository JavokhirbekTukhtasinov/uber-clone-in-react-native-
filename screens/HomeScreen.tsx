import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavOptions from '../components/NavOptions';
const HomeScreen = () => {

  return (
    <SafeAreaView>
      <View>
          <Image style={{width: 100,height: 100, resizeMode: 'contain'}} source={{uri: 'https://cdn-images-1.medium.com/max/1200/1*kg5JVNgH_oJmwCBSA0NAXA.jpeg'}}/>
      </View>
      <NavOptions/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
