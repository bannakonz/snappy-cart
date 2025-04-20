import Icon from "../../util/Icon.jsx";

export default function CardProduct() {
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
                    <img  src={'https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} width={'200px'} alt={'1'}/>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
                        <h3>Product Name</h3>
                        <p>Price 399 B</p>
                    </div>
                </div>
                <Icon type="bin" />
            </div>
        </>
    );
}
