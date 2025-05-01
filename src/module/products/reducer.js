import {LOAD_PRODUCT_REQUEST, LOAD_PRODUCT_SUCCESS, LOAD_PRODUCT_FAILURE} from "./action.js";

const initialState = { // initialState กำหนดค่าเริ่มต้นให้ store
    isLoading: false,
    items: [],
}

export default function (state = initialState,action) {
    console.log('action = ', action);
    switch (action.type) {
        case LOAD_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true,
                items: [],
            }
        case LOAD_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload.products,
            }
        case LOAD_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}
