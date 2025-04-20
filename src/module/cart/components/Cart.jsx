import Icon from "../../util/Icon.jsx";
import CardProduct from "./CardProduct.jsx";

export default function Cart() {
    return (
        <>
            <h1 style={{textAlign: 'center'}}>Order Summary</h1>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
        </>

    );
}
