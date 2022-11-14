import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../Common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { addOrder } from '../redux/actions/Actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Checkout = () => {
    const cartData = useSelector(state => state.reducers);
    const addressList = useSelector(state => state.AddressReducers);
    const [selectedAddress, setSelectedAddress] = useState('');
    const navigation = useNavigation();
    const dispatch = useDispatch();

    // const saveData = async () => {
    //     let cname,cprice
    //     cartData.map((item1) => {
    //         cname = item1.name;
    //         cprice = item1.tempTotal;
    //     });
    //     await AsyncStorage.setItem('NAME',cname);
    //     await AsyncStorage.setItem('PRICE',cprice);
    // }

    // useEffect(() => {
    //     setTimeout(() => {
    //         getData();
    //     }, 3000);
    // }, [])

    // const getData = async () => {
    //     const email = await AsyncStorage.getItem('EMAIL');
    //     if (email !== null) {
    //         navigation.navigate('Home');
    //     }
    //     else {
    //         navigation.navigate('Checkout');
    //     }
    // }

    const storeData = async (cartData) => {
        try {
            const jsonValue = JSON.stringify(cartData)
            await AsyncStorage.setItem('cData', jsonValue)
            console.log('Data Inserted');
        } catch (e) {
            console.log('not run');
        }
    }

    const getTotal = () => {
        let tempTotal = 0;
        cartData.map((item) => {
            tempTotal = tempTotal + item.price;
        });
        return tempTotal;
    };
    //console.log(cartData);
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <View
                style={{
                    flex: 1
                }}>
                <View
                    style={{
                        width: '100%',
                        height: 70,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderBottomWidth:.5
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: 50,
                            marginLeft: 10,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderWidth: .2,
                            padding: 7,
                            borderRadius: 10,
                            backgroundColor: '#ebe9e4'
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
                <View>
                    <FlatList
                        data={cartData}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{
                                    width: '100%',
                                    height: 70,
                                    flexDirection: 'row',
                                    marginTop: 10,
                                }}>
                                    <Image
                                        source={item.image}
                                        style={{
                                            width: 70,
                                            height: 70,
                                            marginLeft: 10,
                                        }} />

                                    <View style={{
                                        padding: 10
                                    }}>
                                        <Text style={{
                                            fontSize: 18,
                                        }}>
                                            {item.name}
                                        </Text>
                                        <Text style={{
                                            marginTop: 10,
                                        }}>
                                            {'$ ' + item.price}
                                        </Text>
                                    </View>
                                </View>
                            );
                        }}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingLeft: 20,
                    paddingRight: 20,
                    marginTop: 30,
                    borderTopWidth: .5,
                    borderTopColor: '#8e8e8e',
                    marginBottom: 10
                }}>
                    <Text style={{
                        marginTop: 20
                    }}
                    >Total: </Text>
                    <Text style={{
                        marginTop: 20
                    }}
                    >{'$ ' + getTotal()}</Text>
                </View>
                <View>
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
                                        alignItems: 'center',
                                    }}>
                                    <View style={{
                                        marginTop: 10,
                                        marginBottom: 10
                                    }}>
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
                                            borderWidth: 0.2,
                                            padding: 7,
                                            marginRight: 20,
                                        }}
                                        onPress={() => {
                                            setSelectedAddress(
                                                'Street: ' + item.building + ' ' +
                                                ',City: ' + item.city + ' ' +
                                                ',Pinode: ' + item.pin,
                                            );
                                        }} >
                                        <Text>Select Address</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        }} />
                </View>
                <View style={{
                    width: '100%',
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Text style={{ margin: 20, fontSize: 18 }}>Selected Address</Text>
                    <TouchableOpacity
                        style={{
                            borderWidth: 0.2,
                            padding: 7,
                            marginRight: 20,
                        }}
                        onPress={() => {
                            navigation.navigate('AddAddress')
                        }} >
                        <Text>Add Address</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderTopWidth: .5,
                    borderTopColor: '#8e8e8e',
                }}>
                    <Text style={{ marginLeft: 20, fontSize: 16, marginTop: 10 }}>
                        {selectedAddress == ''
                            ? 'Please Select Address From Above List'
                            : selectedAddress}
                    </Text>
                </View>
                <CustomButton
                    bgColor={'#000'}
                    textColor={'#fff'}
                    title={'Place Order'}
                    onPress={async () => {
                        // saveData(),
                        storeData(),
                            dispatch(
                                addOrder({
                                    items: cartData,
                                    total: getTotal(),
                                    address: selectedAddress,
                                })),
                            //console.log(cartData);
                            navigation.navigate('OrderSucess');
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Checkout
