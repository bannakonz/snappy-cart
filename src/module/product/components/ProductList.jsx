import CategoryList from "./CategoryList.jsx";
import {useEffect, useState} from "react";
import ProductItem from "./ProductItem.jsx";
import {useLocation} from "react-router-dom";

export default function ProductList() {
    const [products, setProducts] = useState();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    console.log(queryParams); // category=electronics
    let category = queryParams.get('category'); // electronics

    const filterProduct = async (category) => {
        const res = await fetch(`http://localhost:3000/products/?category=${category}`)
        if (res.ok) {
            const searchProductJson = await res.json();
            setProducts(searchProductJson);
        }
    }

    useEffect(() => {
        const fetchProducts = async () => {
            if (category) {
                await filterProduct(category);
            } else {
                const res = await fetch('http://localhost:3000/products');
                if (res.ok) {
                    const jsonProductData = await res.json();
                    setProducts(jsonProductData);
                }
            }
        }
        fetchProducts();
    }, [category]);

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
