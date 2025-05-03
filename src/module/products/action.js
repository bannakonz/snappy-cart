const LOAD_PRODUCTS_REQUEST = 'app/products/LOAD_PRODUCTS_REQUEST';
const LOAD_PRODUCTS_SUCCESS = 'app/products/LOAD_PRODUCTS_SUCCESS';
const LOAD_PRODUCTS_FAILURE = 'app/products/LOAD_PRODUCTS_FAILURE';
const LOAD_PRODUCT_DETAIL_REQUEST = 'app/product/LOAD_PRODUCT_DETAIL_REQUEST';
const LOAD_PRODUCT_DETAIL_SUCCESS = 'app/product/LOAD_PRODUCT_DETAIL_SUCCESS';
const LOAD_PRODUCT_DETAIL_FAILURE = 'app/product/LOAD_PRODUCT_DETAIL_FAILURE';
const CLEAR_PRODUCTS = 'app/products/CLEAR_PRODUCTS';

function loadProducts(category) {
    return async (dispatch) => {
        dispatch({type: LOAD_PRODUCTS_REQUEST});

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/products/${category}`)
            if (!response.ok) {
                console.log('something went wrong')
            }
            const productData = await response.json();
            dispatch({
                type: LOAD_PRODUCTS_SUCCESS,
                payload: {
                    products: productData
                }
            })
        } catch (err) {
            console.log(`load product failure ${err}`);
            dispatch({type: LOAD_PRODUCTS_FAILURE});
        }
    }
}


function loadProductDetail(id) {
    console.log('id load = ', id);
    return async (dispatch) => {
        dispatch({type: LOAD_PRODUCT_DETAIL_REQUEST})
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/products/${id}`)
            if (!response.ok) {
                console.log('load product detail some thing went wrong');
            }
            const productDetailData = await response.json();
            dispatch({
                type: LOAD_PRODUCT_DETAIL_SUCCESS,
                payload: {
                    product: productDetailData
                }
            })
        } catch (err) {
            console.log(`load product detail failure ${err}`);
            dispatch({type: LOAD_PRODUCT_DETAIL_FAILURE})
        }
    }
}

function clearProducts() {
    return {
        type: CLEAR_PRODUCTS,
    }
}

export {
    LOAD_PRODUCTS_REQUEST,
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_FAILURE,
    loadProducts,
    LOAD_PRODUCT_DETAIL_REQUEST,
    LOAD_PRODUCT_DETAIL_SUCCESS,
    LOAD_PRODUCT_DETAIL_FAILURE,
    loadProductDetail,
    CLEAR_PRODUCTS,
    clearProducts,
}
