import {ADD_TO_CART, REMOVE_FROM_CART} from "./action.js";
import {CLEAR_PRODUCTS, LOAD_PRODUCTS_SUCCESS} from "../products/action.js";

const initialState = { // initialState กำหนดค่าเริ่มต้นให้ store
    price: 0,
    productIds: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            if(state.productIds.includes(Number(action.payload.productId))) return state;
            return {
                ...state,
                productIds: [
                    ...state.productIds,
                    Number(action.payload.productId)
                ]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                productIds: state.productIds.filter((id)=> id !== +action.payload.productId)
            }
        case LOAD_PRODUCTS_SUCCESS: {
            let price = 0;
            for(let product of action.payload.products) {
                price = price + product.price;
            }
            return {
                ...state,
                price,
            }
        }
        case CLEAR_PRODUCTS: // อย่าลืมเซ็ตราคาตอนลบสินค้าออกจากตะกร้าหมด
            return {
                ...state,
                price: 0,
            }

        default:
            return state;
    }
}
