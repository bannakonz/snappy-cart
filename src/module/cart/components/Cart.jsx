import CardProduct from "./CardProduct.jsx";
import Delivery from "./Delivery.jsx";
import {useEffect} from "react";
import * as cartActions from "../action.js";
import {useDispatch, useSelector} from "react-redux";

export default function Cart() {
    const dispatch = useDispatch();
    const {items: products} = useSelector(state => state.productReducer);
    const { price } = useSelector(state => state.cartReducer)

    useEffect(() => {
        const action = cartActions.loadCart()
        dispatch(action);
    }, [dispatch]);

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
                    {products.length > 0 ? (
                        <>
                            {products?.map((item)=> <CardProduct key={item.id} product={item}/>)}
                            <h2 style={{textAlign: 'right'}}>Total Price {price}</h2>
                        </>
                    ) : <p>No Cart</p>}
                </div>
                <Delivery/>
            </div>
        </div>
    );
}
