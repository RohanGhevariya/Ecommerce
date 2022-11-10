import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionTypes";

export const reducers = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
        case REMOVE_FROM_CART:
            const deteletedArray = state.filter((item, index) => {
                return index !== action.payload;
            });
            return deteletedArray;

        default:
            return state;
    }
}
