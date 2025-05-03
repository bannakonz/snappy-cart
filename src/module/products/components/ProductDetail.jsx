import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as productActions from "../action.js";
import * as cartActions from "../../cart/action.js";

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {items} = useSelector(state => state.productReducer);
    const {productIds} = useSelector(state => state.cartReducer)
    const exist = productIds?.includes(+id);
    const productDetail = items[0];

    useEffect(() => {
        const action = productActions.loadProductDetail(id);
        dispatch(action)
    }, [dispatch, id]);

    const handleBuyNow  = () => {
        handleAddToCart();
        navigate('/cart');
    }

    const handleAddToCart = () => {
        const action = cartActions.addToCart(id);
        dispatch(action);
    }

    return (
        <div style={{
            maxWidth: '1920px',
            margin: 'auto', padding: '0px 40px',
        }}>
               <button>กลับ</button>
                <div style={{maxWidth: '1000px'}}>
                    <img style={{aspectRatio: '16/9'}} width="100%" src={productDetail?.imageUrl} alt="product-detail" />
                    <h3>{productDetail?.name}</h3>
                    <p>{productDetail?.description}</p>
                    {!exist && (
                        <div style={{display: 'flex', gap: '16px'}}>
                            <button className="button-add" onClick={handleBuyNow}>BUY NOW</button>
                            <button className="button-buy" onClick={handleAddToCart}>ADD TO CART</button>
                        </div>
                    )}
                </div>
        </div>
    )
}
