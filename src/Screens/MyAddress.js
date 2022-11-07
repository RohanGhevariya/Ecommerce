import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress } from '../redux/actions/Actions';

let addressList = [];

const MyAddress = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const addressList = useSelector(state => state.AddressReducers);
    const dispatch= useDispatch();
    console.log(addressList);
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    width: '100%',
                    height: 150,
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
                        borderWidth: .2,
                        padding: 7,
                        borderRadius: 10,
                    }}
                    onPress={() => {
                        navigation.navigate('AddAddress');
                    }}
                >
                    <Text>Add Address</Text>
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
                                borderWidth:.2, 
                                padding:7,
                                marginRight:20
                            }}
                            onPress={()=>{
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
    )
}

export default MyAddress