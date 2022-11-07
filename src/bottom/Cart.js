import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import CartItem from '../Common/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions/Actions';
import CommonButton from '../Common/CommonButton';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.reducers);
  const dispatch = useDispatch();
  return (
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
      {cartData.length>0?(
                <View style={{
                  marginBottom:100,
                }}>
                  <CommonButton
                  bgColor={'#000'}
                  textColor={'#fff'}
                    title={'Checkout'}
                  />
                </View>
      ):null}
    </View>
  );
};

export default Cart