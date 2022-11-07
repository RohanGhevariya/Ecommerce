import { combineReducers, createStore } from "redux";
import { reducers } from "../reducers/Reducers";
import { AddressReducers } from "../reducers/AddressReducers";
import { OrderReducers } from "../reducers/OrderReducers";

const routeReducer = combineReducers({ reducers, AddressReducers, OrderReducers });
const store = createStore(routeReducer);

export default store;