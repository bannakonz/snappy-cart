export default function Icon({type = ''}) {
    const iconPath = (iconType) => {
        if (iconType === 'bin') {
            return 'src/assets/bin.svg'
        } else {
            return 'src/assets/headphone.svg';
        }
    }
    return (
        <>
            <img src={iconPath(type)} alt={'icon'} width={'24px'} height={'24px'} style={{alignSelf: 'center'}}/>
        </>
    )
}
