import Input from "../../util/Input.jsx";
import { useState } from 'react';

export default function Delivery() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState)=> {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }


    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        return newErrors;
    }

    const onHandleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
    }

    return (
        <>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
            }}>
                <h3>Delivery Information</h3>
                <Input labelName="Name"  name="name" value={formData.name} onChange={handleInputChange} errorMessage={errors?.name} />
                <Input labelName="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} errorMessage={errors.email}/>
                <Input labelName="Address" name="address" value={formData.address} onChange={handleInputChange} errorMessage={errors.address} />
                <button type="submit" onClick={onHandleSubmit}>Proceed</button>
            </form>
        </>
    )
}
