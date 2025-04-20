export default function Input({labelName = '', }) {
    return (
        <div>
            {labelName && <label>{labelName}</label>}
            <input type="text" />
        </div>
    )
}
