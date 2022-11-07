import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

const Checkout = () => {
    const cartData = useSelector(state => state.reducers);
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
            </View>
        </SafeAreaView>
    )
}

export default Checkout