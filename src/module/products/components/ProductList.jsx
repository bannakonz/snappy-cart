import CategoryList from "./CategoryList.jsx";
import {useEffect} from "react";
import ProductItem from "./ProductItem.jsx";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../action.js";
export default function ProductList() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    console.log(queryParams); // category=electronics
    let category = queryParams.get('category'); // electronics
    const dispatch = useDispatch();
    const {items: products} = useSelector(state => state.productReducer);
    console.log('products = ', products);


    useEffect(() => {
        const action = actions.loadProducts(category);
        dispatch(action);
    }, [dispatch, category]);

    return (
        <>
            <h1 style={{color: 'blue', textAlign: 'center'}}>{category ? `${category} Product` : 'All Product'}</h1>
            <CategoryList></CategoryList>
            <div className="container-card">
                {products?.map((item)=>{
                    return <ProductItem
                        key={item.id}
                        name={item.name}
                        id={item.id}
                        description={item.description}
                        category={item.category}
                        price={item.price}
                        imageUrl={item.imageUrl}
                    />
                })}
            </div>
        </>

    )
}
