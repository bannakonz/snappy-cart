import CategoryList from "./CategoryList.jsx";
import {useEffect, useState} from "react";

export default function ProductList() {
    const [products, setProducts] = useState();

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('http://localhost:3000/products');
            if (res.ok) {
                const jsonProductData = await res.json();
                setProducts(jsonProductData);
            }
        }
        fetchProducts();
    }, []);

    console.log('data = ', products);
    return (
        <>
            <h1 style={{color: 'blue', textAlign: 'center'}}>All Product</h1>
            <CategoryList></CategoryList>
        </>

    )
}
