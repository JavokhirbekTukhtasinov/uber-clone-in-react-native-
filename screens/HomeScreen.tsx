import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavOptions from '../components/NavOptions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
// import {GOOGLE_KEY} from '@env';
const HomeScreen = (props: any) => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <View>
        <Text></Text>
          <Image style={{width: 100,height: 100, resizeMode: 'contain'}} source={{uri: 'https://cdn-images-1.medium.com/max/1200/1*kg5JVNgH_oJmwCBSA0NAXA.jpeg'}}/>
      </View>
      <GooglePlacesAutocomplete
       placeholder='Where From?'
        minLength={2} // minimum length of text to search
        debounce={400}
        styles={{
          container: {
            flex: 1,
          },
        }}
        query={{  // query to server  
          key: "AIzaSyAbv86TlL_oZWVDUwo5csUoQiSYfWVsPZc",
          language: 'en', // language of the results

        }}
        nearbyPlacesAPI="GooglePlacesSearch"
      />
      <View style={{marginTop: 40}}>
      <NavOptions navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
