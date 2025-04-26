import {Route, Routes} from "react-router-dom";
import Cart from "./Cart.jsx";

export default function CartRoute() {
    return (
        <Routes>
            <Route path="" element={<Cart />} />
        </Routes>
    );
}
