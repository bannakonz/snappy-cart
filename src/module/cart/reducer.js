import {ADD_TO_CART} from "./action.js";

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
        default:
            return state;
    }
}
