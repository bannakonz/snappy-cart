import {useNavigate} from "react-router-dom";

export default function ProductItem({id, name, description, imageUrl, price}) {
    const navigate = useNavigate();
    const navigateToDetail = () => {
        navigate(`/products/${id}`)
    }

    const navigateToCart = (e) => {
        e.stopPropagation();
        navigate("/cart");
    }
    return (
        <div className="card" onClick={navigateToDetail} >
            <img src={imageUrl || ''} alt="image" height="150px" width="100%"/>
            <div className="card-body">
                <h2 className="product-title">{name}</h2>
                <p className="product-description">{description}</p>
                <p className="product-price">{price}</p>
            </div>
            <div className="card-footer">
                <button className="button-buy" onClick={(e) => navigateToCart(e)}>Buy Now</button>
                <button className="button-add">Add to Card</button>
            </div>
        </div>
    );
}
