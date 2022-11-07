import { combineReducers, createStore } from "redux";
import { reducers } from "../reducers/Reducers";
import { AddressReducers } from "../reducers/AddressReducers";

const routeReducer = combineReducers({ reducers, AddressReducers });
const store = createStore(routeReducer);

export default store;