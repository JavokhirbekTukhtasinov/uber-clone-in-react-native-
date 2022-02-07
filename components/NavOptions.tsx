import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'twrnc'
import {Icon} from 'react-native-elements'


const NavOptions = ({navigation}: any) => {
    const data = [
        {
            id: 1,
            name: 'Get a Ride',
            screen: "MapScreen",
            image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070443/assets/82/6bf372-6016-492d-b20d-d81878a14752/original/Black.png'
        },
        {
            id: 2,
            name: 'Order food',
            screen: "EatsScreen",
            image: "https://sc04.alicdn.com/kf/Hff514764c40d4c12a1901b05c9be8297m.jpg"
        }
    ]

    return (
        <FlatList
            horizontal
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={tw`p-2 pl-8 pt-4 bg-gray-200 m-2 w-40`}>
                    <View>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: 'contain' }}
                            source={{ uri: item.image }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.name}</Text>
                       <Icon
                       name='arrowright'
                       type='antdesign'
                       color="white"
                       />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavOptions;

const styles = StyleSheet.create({});
