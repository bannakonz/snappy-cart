import {combineReducers} from "redux";

import uiReducer from "./ui/reducer.js";
import productReducer from "./products/reducer.js";
import cartReducer from "./cart/reducer.js"


export default combineReducers({
    uiReducer,
    productReducer,
    cartReducer,
})
