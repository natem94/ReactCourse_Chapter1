import React, { useState, useEffect } from 'react';

const ContactRow = ({ contact, editContact }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedContact, setUpdatedContact] = useState(contact);

    useEffect(() => {
        setUpdatedContact(contact);
    }, [contact]);

    const handleEdit = () => {
        editContact(updatedContact); 
        setIsEditing(false); 
    };

    return (
        <tr>
            <td>{contact.id}</td>
            {isEditing ? (
                <>
                    <td>
                        <input
                            type="text"
                            value={updatedContact.firstName}
                            onChange={(e) => setUpdatedContact({ ...updatedContact, firstName: e.target.value })}
                            required
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            value={updatedContact.lastName}
                            onChange={(e) => setUpdatedContact({ ...updatedContact, lastName: e.target.value })}
                            required
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            value={updatedContact.phone}
                            onChange={(e) => setUpdatedContact({ ...updatedContact, phone: e.target.value })}
                            required
                        />
                    </td>
                    <td>
                        <button onClick={handleEdit}>Save</button>
                    </td>
                </>
            ) : (
                <>
                    <td>{contact.firstName}</td>
                    <td>{contact.lastName}</td>
                    <td>{contact.phone}</td>
                    <td>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    </td>
                </>
            )}
        </tr>
    );
};

export default ContactRow;
