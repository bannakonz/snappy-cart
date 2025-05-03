import Icon from "../../util/Icon.jsx";
import {useDispatch} from "react-redux";
import * as cartActions from "../action.js";


export default function CardProduct({product}) {

    const dispatch = useDispatch();

    const handleRemoveCart = () => {
        console.log('remove ')
        dispatch(cartActions.removeFromCart(product?.id))
    }
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                border: 'solid 1px gray',
                borderRadius: '8px',
                overflow: 'hidden',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '16px'
                }}>
                    <img  src={product.imageUrl} width={'200px'} height={'150px'} alt={'1'}/>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                </div>
                <Icon type="bin" onClick={handleRemoveCart} />
            </div>
        </>
    );
}
