export default function Icon({type = '', onClick }) {
    const iconPath = (iconType) => {
        if (iconType === 'bin') {
            return 'src/assets/bin.svg';
        } else if (iconType === "cart") {
            return 'src/assets/cart-shopping.svg'
        } else {
            return 'src/assets/headphone.svg';
        }
    }
    return (
        <>
            <img onClick={onClick} src={iconPath(type)} alt={'icon'} width={'24px'} height={'24px'} style={{alignSelf: 'center', cursor: 'pointer'}}/>
        </>
    )
}
