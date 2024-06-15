import {combineReducers } from "redux";
import Category from "./Category"
import Product from "./Product";


const reducers = combineReducers({
    category:Category,
    product: Product,
});

export default reducers;