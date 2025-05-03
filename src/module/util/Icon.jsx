import binIcon from '../../assets/bin.svg';
import shoppingIcon from '../../assets/cart-shopping.svg'
import catIcon from '../../assets/cat.svg';
import headPhoneIcon from '../../assets/headphone.svg';

export default function Icon({type = '', onClick }) {
    const iconPath = (iconType) => {
        if (iconType === 'bin') {
            return binIcon;
        } else if (iconType === "cart") {
            return shoppingIcon;
        } else if (iconType === "cat") {
            return catIcon;
        } else {
            return headPhoneIcon;
        }
    }
    return (
        <>
            <img onClick={onClick} src={iconPath(type)} alt={'icon'} width={'24px'} height={'24px'} style={{alignSelf: 'center', cursor: 'pointer'}}/>
        </>
    )
}
