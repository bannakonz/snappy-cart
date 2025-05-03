import {Route, Routes} from "react-router-dom";
import ProductRoute from "../../products/components/ProductRoute.jsx";
import CartRoute from "../../cart/components/CartRoute.jsx";

export default function BaseRoute() {
    return (
        <>
                <Routes>
                    <Route  path="/products/*" element={<ProductRoute />} />
                     <Route path="/cart/*" element={<CartRoute />} />
                    <Route path="/" element={<ProductRoute/>} />
                    <Route path="*" element={<div style={{color: 'black'}}>Page Not Found</div>} />
                </Routes>
        </>
    )
}
