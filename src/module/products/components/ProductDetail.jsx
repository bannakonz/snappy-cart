import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../action.js";

export default function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const {items} = useSelector(state => state.productReducer);
    const productDetail = items[0];

    useEffect(() => {
        const action = actions.loadProductDetail(id);
        dispatch(action)
    }, [dispatch, id]);

    return (
        <div style={{
            maxWidth: '1920px',
            margin: 'auto', padding: '0px 40px',
        }}>
               <button>กลับ</button>
                <div style={{maxWidth: '1000px'}}>
                    <img style={{aspectRatio: '16/9'}} width="100%" src={productDetail?.imageUrl} alt="product-detail" />
                    <h3>{productDetail?.name}</h3>
                    <p>{productDetail?.description}</p>
                    <div style={{display: 'flex', gap: '16px'}}>
                        <button className="button-add">ADD</button>
                        <button className="button-buy">BUY</button>
                    </div>
                </div>
        </div>
    )
}
