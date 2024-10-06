// src/components/Container/Container.tsx
import React, { useState } from 'react';
import App from '../App/App'; // Ensure the path to App is correct

const Container: React.FC = () => {
    const [items, setItems] = useState<{ id: number; title: string }[]>([
        { id: 1, title: 'Minich Vitaliy' },
        { id: 2, title: 'Mykola Vorobej' },
        { id: 3, title: 'Ivan Ivanow' },
    ]);
    const [search, setSearch] = useState('');
    const [title, setTitle] = useState('');

    const addItem = (title: string) => {
        if (title.trim() === '') return; // Prevent adding empty items
        const newItem = { id: Date.now(), title };
        setItems(prevItems => [...prevItems, newItem]);
    };

    const removeItem = (id: number) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const filteredItems = items.filter(item => 
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <App
            items={filteredItems} // Ensure items is passed correctly
            removeItem={removeItem}
            addItem={addItem}
            title={title} // Pass title state
            setTitle={setTitle} // Pass setTitle function
            search={search} // Pass search state
            setSearch={setSearch} // Pass setSearch function
        />
    );
};

export default Container;
