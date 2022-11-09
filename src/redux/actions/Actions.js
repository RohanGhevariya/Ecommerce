import { ADD_ADDRESS, ADD_ORDER, ADD_TO_CART, DELETE_ADDRESS, DELETE_ORDER, REMOVE_FROM_CART } from "../ActionTypes";

export const addItemToCart = data => ({
    type: ADD_TO_CART,
    payload: data,
});

export const removeFromCart = index => ({
    type: REMOVE_FROM_CART,
    payload: index,
});

export const addAddress = data => ({
    type: ADD_ADDRESS,
    payload: data,
});

export const deleteAddress = index => ({
    type: DELETE_ADDRESS,
    payload: index,
});

export const addOrder = data => ({
    type: ADD_ORDER,
    payload: data,
});

export const deleteOrder = index => ({
    type: DELETE_ORDER,
    payload: index,
});