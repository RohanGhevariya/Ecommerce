import { View, Text, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OrderSucess = () => {
    const orders = useSelector(state => state.OrderReducers);
    const navigation= useNavigation();
    console.log(orders);
    const route = useRoute();
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Image
                source={require('../images/success.png')}
                style={{
                    width: 50,
                    height: 50,
                }}
            />
            <Text style={{
                marginTop: 20,
                fontSize: 20,
            }}>Order Placed Successfully.</Text>
            <TouchableOpacity 
            style={{
                width:200,
                height:50,
                marginTop:50,
                justifyContent:'center',
                alignItems:'center',
                borderWidth:0.6,
            }}onPress={()=>
            navigation.navigate('Orders')}>
                <Text>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OrderSucess