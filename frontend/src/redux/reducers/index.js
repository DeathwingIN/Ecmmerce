import {combineReducers } from "redux";
import Category from "./Category"
import Product from "./Product";
import Cart from "./Cart";


const reducers = combineReducers({
    category:Category,
    product: Product,
    cart: Cart,
});

export default reducers;