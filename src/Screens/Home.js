import { View, Text, Touchable, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Main from '../bottom/Main';
import Cart from '../bottom/Cart';
import Profile from '../bottom/Profile';
import Search from '../bottom/Search';
import { useSelector } from 'react-redux';

const Home = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    const data = useSelector(state => state);

    return (
        <View style={{ flex: 1 }}>
            {selectedTab == 0 ? (
                <Main />
            ) : selectedTab == 1 ? (
                <Search />
            ) : selectedTab == 2 ? (
                <Cart />
            ) : (
                <Profile />
            )
            }
            <View
                style={{
                    position: 'absolute',
                    bottom: 10,
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    elevation: 5,
                }}>
                <TouchableOpacity
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        setSelectedTab(0);
                    }}
                >
                    <Image
                        source={require('../images/home.png')}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: selectedTab == 0 ? '#000' : '#BeBeBe'
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        setSelectedTab(1);
                    }}
                >
                    <Image
                        source={require('../images/search.png')}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: selectedTab == 1 ? '#000' : '#BeBeBe'
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        setSelectedTab(2);
                    }}
                >
                    <Image
                        source={require('../images/cart.png')}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: selectedTab == 2 ? '#000' : '#BeBeBe'
                        }}
                    />

                    <View
                        style={{
                            width: 20,
                            height: 20,
                            backgroundColor: '#000',
                            borderRadius: 7,
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            top: 5,
                            left: 5
                        }}>
                        <Text
                            style={{
                                color: '#fff',
                                fontWeight: '600',
                            }}>{data.reducers.length}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        setSelectedTab(3);
                    }}
                >
                    <Image
                        source={require('../images/user.png')}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: selectedTab == 3 ? '#000' : '#BeBeBe'
                        }}
                    />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Home