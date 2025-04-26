import {Link, useNavigate} from "react-router-dom";
import Icon from "../../util/Icon.jsx";

export default function Header() {
    const navigate = useNavigate();
    const navigateToCart = () => {
        navigate("/cart")
    }
    return (
        <nav style={{background: 'green', height: '50px'}}>
            <ul style={{margin: '0px', height: '100%',  padding: '0px 20px', listStyle: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link  to="">Logo</Link>
                <div style={{display: 'flex', columnGap: '20px',  justifyContent: 'space-between'}}>
                    <li>Toggle</li>
                    <Icon type="cart" onClick={navigateToCart}>Cart</Icon>
                </div>
            </ul>
        </nav>
    )
}
