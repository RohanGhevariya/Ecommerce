import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import CartItem from '../Common/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions/Actions';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
      }}>
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
    </View>
  );
};

export default Cart