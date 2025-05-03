import CardProduct from "./CardProduct.jsx";
import Delivery from "./Delivery.jsx";
import {useEffect} from "react";
import * as cartActions from "../action.js";
import {useDispatch, useSelector} from "react-redux";

export default function Cart() {
    const dispatch = useDispatch();
    const {items: products} = useSelector(state => state.productReducer);

    console.log('p = ', products)

    useEffect(() => {
        console.log('effect = ')
        const action = cartActions.loadCart()
        dispatch(action);
    }, [dispatch]);

    if (!products) return <div>No cart</div>
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
                    {products?.map((item)=> {
                        console.log('item = ', item);
                        return <CardProduct key={item.id} product={item}></CardProduct>
                        })
                    }
                </div>
                <Delivery/>
            </div>
        </div>
    );
}
