import { View, TouchableOpacity, Image, Text } from 'react-native'
import React from 'react'

const ProductItem = ({ item, onAddToCart }) => {
    return (
        <TouchableOpacity
            style={{
                height: 200,
                marginTop: 5,
                width: 200,
                borderRadius: 20,
                elevation: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 10,
                backgroundColor: '#fff',
                marginBottom: 10,
                shadowOpacity: 1,
                shadowOffset: {
                    width: -2,
                    height: 2
                },
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
                        fontWeight: '500',
                    }}
                >{item.name}</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text
                        style={{
                            marginTop: 5,
                            marginLeft: 10,
                            fontSize: 18,
                            fontWeight: '600',
                        }}
                    >{'$' + item.price}</Text>
                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            padding: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 7,
                            marginRight: 10,
                            backgroundColor:'#000',
                            marginBottom:10,
                            shadowOpacity: 1,
                            shadowOffset: {
                                width: -2,
                                height: 2
                              },
                        }}
                        onPress={() => {
                            onAddToCart(item)
                        }}
                    >
                        <Text style={{ color: '#fff', fontWeight:'600' }}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem