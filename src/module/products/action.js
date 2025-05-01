const LOAD_PRODUCTS_REQUEST = 'app/products/LOAD_PRODUCTS_REQUEST';
const LOAD_PRODUCTS_SUCCESS = 'app/products/LOAD_PRODUCTS_SUCCESS';
const LOAD_PRODUCTS_FAILURE = 'app/products/LOAD_PRODUCTS_FAILURE';


function loadProducts(category) {
    return async (dispatch) => {
        dispatch({type: LOAD_PRODUCTS_REQUEST});

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

export {
    LOAD_PRODUCTS_REQUEST,
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_FAILURE,
    loadProducts
}
