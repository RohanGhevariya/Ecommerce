import { View, TouchableOpacity, Image, Text } from 'react-native'
import React from 'react'

const CartItem = ({ item, OnRemoveItem }) => {
    return (
        <TouchableOpacity
            style={{
                height: 190,
                marginTop: 5,
                width: '94%',
                borderRadius: 20,
                elevation: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 10,
                backgroundColor: '#fff',
                marginBottom: 10,
                shadowOpacity: 1
            }}
        >
            <View style={{
                width: '100%',
                height: '100%',
            }}>
                <Image source={item.image}
                    style={{
                        width: '100%',
                        height: 120,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                    }} />
                <Text
                    style={{
                        marginTop: 10,
                        marginLeft: 10,
                        fontSize: 18,
                        fontWeight: '600',
                    }}
                >{item.name}</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 18,
                }}>
                    <Text
                        style={{
                            marginTop: 5,
                            marginLeft: 10,
                            fontSize: 18,
                            marginBottom: 10,
                            fontWeight: '600',
                        }}
                    >{'$' + item.price}</Text>
                    <TouchableOpacity
                        style={{
                            borderWidth: .5,
                            padding: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            marginRight: 15,
                        }}
                        onPress={() => {
                            OnRemoveItem();
                        }}
                    >
                        <Text style={{ color: '#000' }}>Remove Item</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CartItem