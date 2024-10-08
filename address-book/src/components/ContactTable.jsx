import React from 'react';
import ContactRow from './ContactRow';

const ContactTable = ({ contacts, editContact }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(contact => (
                    <ContactRow key={contact.id} contact={contact} editContact={editContact} />
                ))}
            </tbody>
        </table>
    );
};

export default ContactTable;
