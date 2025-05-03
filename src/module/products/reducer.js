import {
    LOAD_PRODUCTS_REQUEST,
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_FAILURE,
    LOAD_PRODUCT_DETAIL_REQUEST,
    LOAD_PRODUCT_DETAIL_SUCCESS,
    LOAD_PRODUCT_DETAIL_FAILURE, CLEAR_PRODUCTS
} from "./action.js";

const initialState = { // initialState กำหนดค่าเริ่มต้นให้ store
    isLoading: false,
    items: [],
}

export default function (state = initialState,action) {
    switch (action.type) {
        case LOAD_PRODUCTS_REQUEST:
        case LOAD_PRODUCT_DETAIL_REQUEST:
            return {
                ...state,
                isLoading: true,
                items: [],
            }
        case LOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload.products,
            }
        case LOAD_PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: [action.payload.product],
            }
        case LOAD_PRODUCTS_FAILURE:
        case LOAD_PRODUCT_DETAIL_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        case CLEAR_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                items: [],
            }
        default:
            return state;
    }
}
