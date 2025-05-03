import * as productActions from "../products/action.js";

const ADD_TO_CART = 'app/cart/ADD_TO_CART';
const REMOVE_FROM_CART = 'app/cart/REMOVE_FROM_CART';



function addToCart(productId) {
    return {
        type: ADD_TO_CART,
        payload: {
            productId,
        },
    }
}

function removeFromCart(productId) {
    return (dispatch) => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: {
                productId,
            }
        })
        dispatch(loadCart());
    }
}

function loadCart() {
    return (dispatch, getState) => {
        const { productIds } = getState().cartReducer;
        if (productIds.length === 0) {
            return dispatch(productActions.clearProducts())
        }
        const query = productIds?.map(id => `id=${id}`).join('&');
        dispatch(productActions.loadProducts(`?${query}`));
    }
}


export {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    addToCart,
    loadCart,
    removeFromCart,
}
