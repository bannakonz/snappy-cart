import Icon from "../../util/Icon.jsx";
import CardProduct from "./CardProduct.jsx";
import Delivery from "./Delivery.jsx";

export default function Cart() {
    return (
        <div style={{
            maxWidth: '90%',
            margin: 'auto',
        }}>
            <h1 style={{textAlign: 'center'}}>Order Summary</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'auto auto',
                columnGap: '24px'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '12px'
                }}>
                    <CardProduct></CardProduct>
                    <CardProduct></CardProduct>
                    <CardProduct></CardProduct>
                    <CardProduct></CardProduct>
                </div>
                <Delivery/>
            </div>
        </div>
    );
}
