export default function Input({
                                  labelName = '',
                                  value, onChange, name ,
                                  type = "text",
                                  isRequired = false,
                                  errorMessage = '',
}) {
    return (
        <div>
            {labelName && <label>{labelName}</label>}
            <input required={isRequired} type={type} value={value} name={name} onChange={onChange} />
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        </div>
    )
}
