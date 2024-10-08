import React, { useState } from 'react';
import ContactTable from './ContactTable';
import Form from './Form';

const ContactsContainer = () => {
    const [contacts, setContacts] = useState([
        { id: 1, firstName: "John", lastName: "Doe", phone: "123456789" },
        { id: 2, firstName: "Jane", lastName: "Doe", phone: "987654321" },
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentContact, setCurrentContact] = useState(null); // Додаємо стан для редагованого контакту

    const addContact = (newContact) => {
        setContacts([...contacts, { id: contacts.length + 1, ...newContact }]);
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
        // Скидаємо currentContact, якщо він був видалений
        if (currentContact && currentContact.id === id) {
            setCurrentContact(null);
        }
    };

    const updateContact = (updatedContact) => {
        setContacts(contacts.map(contact => 
            (contact.id === updatedContact.id ? updatedContact : contact)
        ));
        setCurrentContact(null); // Скидаємо currentContact після оновлення
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleEditContact = (contact) => {
        setCurrentContact(contact); // Встановлюємо контакт для редагування
    };

    const filteredContacts = contacts.filter(contact =>
        contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone.includes(searchTerm)
    );

    return (
        <div>
            <h1>Address Book</h1>
            <Form 
                addContact={addContact} 
                editContact={updateContact} 
                currentContact={currentContact} // Передаємо currentContact в форму
            />
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm} 
                onChange={handleSearchChange} 
            />
            <ContactTable 
                contacts={filteredContacts} 
                deleteContact={deleteContact} 
                updateContact={handleEditContact} 
            />
            {filteredContacts.length === 0 && <p>No data to display.</p>}
        </div>
    );
};

export default ContactsContainer;
