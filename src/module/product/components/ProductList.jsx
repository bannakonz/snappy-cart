import CategoryList from "./CategoryList.jsx";
import {useEffect, useState} from "react";
import ProductItem from "./ProductItem.jsx";

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

    return (
        <>
            <h1 style={{color: 'blue', textAlign: 'center'}}>All Product</h1>
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
