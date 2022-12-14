import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./UserSlice";
import CartsReducer from "./CartSlice";

const reducer = combineReducers({
    users: UsersReducer,
    carts: CartsReducer,
});

const store = configureStore({reducer}); 


export default store; 