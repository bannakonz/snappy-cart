import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState({})

    useEffect(() => {
        const fetchId =  async () => {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/products/${id}`)
            const productJson = await res.json();
            if (res.ok) {
                setProductDetail(productJson)
            }
        }
        fetchId()
    }, [id]);

    console.log('prodcut detail = ', productDetail)
    return (
        <div style={{
            maxWidth: '1920px',
            margin: 'auto', padding: '0px 40px',
        }}>
               <button>กลับ</button>
                <div style={{maxWidth: '1000px'}}>
                    <img style={{aspectRatio: '16/9'}} width="100%" src={productDetail.imageUrl || "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="product-detail" />
                    <h3>{productDetail?.name}</h3>
                    <p>{productDetail.description}</p>
                    <div style={{display: 'flex', gap: '16px'}}>
                        <button className="button-add">ADD</button>
                        <button className="button-buy">BUY</button>
                    </div>
                </div>
        </div>
    )
}
