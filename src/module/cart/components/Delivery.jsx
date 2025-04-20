import Input from "../../util/Input.jsx";

export default function Delivery() {
    return (
        <>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
            }}>
                <h3>Delivery Information</h3>
                <Input labelName="Name" />
                <Input labelName="Eamil" />
                <Input labelName="Address" />
                <button onClick={(event)=> event.preventDefault()}>Proceed</button>
            </form>
        </>
    )
}
