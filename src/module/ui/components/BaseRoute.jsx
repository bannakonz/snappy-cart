import {Route, Routes} from "react-router-dom";
import ProductRoute from "../../product/components/ProductRoute.js";
import CartRoute from "../../cart/components/CartRoute.jsx";

export default function BaseRoute() {
    return (
        <>
                <Routes>
                    <Route path="/products/*" element={<ProductRoute />} />
                    <Route path="/cart" element={<CartRoute/>}/>
                </Routes>
        </>
    )
}
