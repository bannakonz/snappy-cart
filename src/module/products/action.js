const LOAD_PRODUCT_REQUEST = 'app/products/LOAD_PRODUCT_REQUEST';
const LOAD_PRODUCT_SUCCESS = 'app/products/LOAD_PRODUCT_SUCCESS';
const LOAD_PRODUCT_FAILURE = 'app/products/LOAD_PRODUCT_FAILURE';


function loadProducts(category) {
    return async (dispatch) => {
        dispatch({type: LOAD_PRODUCT_REQUEST});

        try {
            let response;
            if (category) {
                 response = await fetch(`${import.meta.env.VITE_BASE_URL}/products/?category=${category}`)
            } else {
                 response = await fetch(`${import.meta.env.VITE_BASE_URL}/products`);
            }
            console.log('res = ', response);
            if (!response.ok) {
                console.log('something went wrong')
            }
            const productData = await response.json();
            dispatch({
                type: LOAD_PRODUCT_SUCCESS,
                payload: {
                    products: productData
                }
            })
        } catch (err) {
            console.log(`load product failure ${err}`);
            dispatch({type: LOAD_PRODUCT_FAILURE});
        }
    }
}

export {
    LOAD_PRODUCT_REQUEST,
    LOAD_PRODUCT_SUCCESS,
    LOAD_PRODUCT_FAILURE,
    loadProducts
}
