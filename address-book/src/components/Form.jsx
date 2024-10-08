import React, { useState, useEffect } from 'react';

const Form = ({ addContact, editContact, currentContact }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (currentContact) {
            setFirstName(currentContact.firstName);
            setLastName(currentContact.lastName);
            setPhone(currentContact.phone);
        } else {
            setFirstName('');
            setLastName('');
            setPhone('');
        }
    }, [currentContact]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!firstName) newErrors.firstName = "The first name is required";
        if (!lastName) newErrors.lastName = "The last name is required";
        if (!phone) newErrors.phone = "The phone number is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        if (currentContact) {
            editContact({ id: currentContact.id, firstName, lastName, phone });
        } else {
            
            addContact({ firstName, lastName, phone });
        }

        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
                {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
            </div>
            <div>
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
                {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
            </div>
            <div>
                <label>
                    Phone:
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
            </div>
            <button type="submit">{currentContact ? 'Save Changes' : 'Add Contact'}</button>
        </form>
    );
};

export default Form;
