import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress } from '../redux/actions/Actions';
import { SafeAreaView } from 'react-native-safe-area-context';

let addressList = [];

const MyAddress = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const addressList = useSelector(state => state.AddressReducers);
    const dispatch = useDispatch();
    //console.log(addressList);
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        width: '100%',
                        height: 70,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                        style={{
                            width:50,
                            marginLeft: 30,
                            justifyContent: 'center',
                            alignItems:'flex-start',
                            borderWidth: .2,
                            padding: 7,
                            borderRadius: 10,
                            backgroundColor:'#ebe9e4'
                        }}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <Image source={require('../images/back.png')}
                            style={{
                                width: 24,
                                height: 24,
                            }} />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        width: '100%',
                        height: 50,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                    <Text
                        style={{
                            fontWeight: '600',
                            fontSize: 18,
                            marginLeft: 25,
                        }}
                    >My Address</Text>
                    <TouchableOpacity
                        style={{
                            marginRight: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 0.5,
                            padding: 7,
                            borderRadius: 5,
                            backgroundColor:'#ebe9e4'
                        }}
                        onPress={() => {
                            navigation.navigate('AddAddress');
                        }}
                    >
                        <Text 
                            style={{
                                fontWeight:'600'
                            }}
                        >Add Address</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={addressList}
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                style={{
                                    width: '100%',
                                    borderWidth: 0.2,
                                    alignSelf: 'center',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                <View>
                                    <Text
                                        style={{
                                            marginLeft: 20
                                        }}
                                    >{'City: ' + item.city}</Text>
                                    <Text
                                        style={{
                                            marginLeft: 20
                                        }}
                                    >{'Street: ' + item.building}</Text>
                                    <Text
                                        style={{
                                            marginLeft: 20
                                        }}
                                    >{'Pincode: ' + item.pin}</Text>
                                </View>
                                <TouchableOpacity
                                    style={{
                                        borderWidth: .2,
                                        padding: 7,
                                        marginRight: 20
                                    }}
                                    onPress={() => {
                                        dispatch(deleteAddress(index));
                                    }}
                                >
                                    <Text>Delete</Text>
                                </TouchableOpacity>

                            </View>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default MyAddress