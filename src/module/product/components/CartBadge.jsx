import Icon from "../../util/Icon.jsx";

export default function CartBadge({handleAddToCart}) {
    return (
        <div style={{
            position: 'relative',
            width: '20px',
            height: '20px',
        }}
        onClick={handleAddToCart}
        >
            <Icon type="cart" />
            <div style={{
                position: 'absolute',
                color: 'black',
                background: 'aqua',
                width: '20px',
                height: '20px',
                bottom: '60%',
                left: '60%',
                borderRadius: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>4</div>
        </div>
    )
}
