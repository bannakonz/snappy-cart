import {useNavigate} from "react-router-dom";
import * as cartActions from "../../cart/action.js";
import {useDispatch, useSelector} from "react-redux";

export default function ProductItem({id, name, description, imageUrl, price}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { productIds } = useSelector(state => state.cartReducer);
    const exist = productIds?.includes(+id);

    const navigateToDetail = () => {
        navigate(`/products/${id}`)
    }

    const handleBuyNow  = (e) => {
        e.stopPropagation();
        handleAddToCart(e);
        navigate('/cart');
    }

    const handleAddToCart = (e) => {
        e.stopPropagation();
        const action = cartActions.addToCart(id);
        dispatch(action);
    }
    return (
        <div className="card" onClick={navigateToDetail} >
            <img src={imageUrl || ''} alt="image" height="150px" width="100%"/>
            <div className="card-body">
                <h2 className="product-title">{name}</h2>
                <p className="product-description">{description}</p>
                <p className="product-price">{price}</p>
            </div>
            {!exist && (
                <div className="card-footer">
                    <button className="button-buy" onClick={(e)=>handleBuyNow(e)}>Buy Now</button>
                    <button className="button-add" onClick={(e)=>handleAddToCart(e)}>Add to Card</button>
                </div>
            )}
        </div>
    );
}
