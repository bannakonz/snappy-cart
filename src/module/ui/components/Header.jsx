import {Link, useNavigate} from "react-router-dom";
import CartBadge from "../../products/components/CartBadge.jsx";
import Icon from "../../util/Icon.jsx";

export default function Header() {
    const navigate = useNavigate();
    const navigateToCart = () => {
        navigate("/cart")
    }

    const navigateToHome = () => {
        navigate("/")
    }
    return (
        <nav style={{
            background: '#969696',
            height: '50px',
            position: 'sticky',
            top: 0,
        }}>
            <ul style={{margin: '0px', height: '100%',  padding: '0px 20px', listStyle: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{display: 'flex', alginItems: 'center', gap: '10px'}}>
                    <Icon type="cat" onClick={navigateToHome} />
                    <p style={{color: 'white', cursor: 'pointer'}} onClick={()=>navigate("/products")}>Product</p>
                </div>
                <div style={{display: 'flex', columnGap: '20px',  justifyContent: 'space-between'}}>
                    {/*<li>Toggle</li>*/}
                    <CartBadge handleAddToCart={navigateToCart}/>
                </div>
            </ul>
        </nav>
    )
}
