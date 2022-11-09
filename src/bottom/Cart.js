import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import CartItem from '../Common/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions/Actions';
import CommonButton from '../Common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.reducers);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getData = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    if (email !== null) {
      navigation.navigate('Checkout');
    }
    else {
      navigation.navigate('Login');
    }
  }
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <View
        style={{
          flex: 1,
        }}>
        {cartData.length > 0 ? (
          <FlatList
            data={cartData}
            renderItem={({ item, index }) => {
              return (
                <CartItem
                  item={item}
                  OnRemoveItem={() => {
                    dispatch(removeFromCart(index));
                  }}
                />
              );
            }}
          />
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text>
              No Items Added in Cart.
            </Text>
          </View>
        )}
        {cartData.length > 0 ? (
          <View style={{
            marginBottom: 100,
          }}>
            <CommonButton
              bgColor={'#000'}
              textColor={'#fff'}
              title={'Checkout'}
              onPress={
                getData
              }
            />
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Cart