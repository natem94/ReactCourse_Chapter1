// src/components/Container/Container.tsx
import React, { useState } from 'react';
import App from '../App/App';

const Container: React.FC = () => {
    const [items, setItems] = useState<{ id: number; title: string; }[]>([
        { id: 1, title: 'ЛиляБоля ПИЗДАБОЛКА' },
    ]);
    const [title, setTitle] = useState('');
    const [search, setSearch] = useState('');

    const addItem = () => {
        if (title.trim() === '') return;
        const newItem = { id: Date.now(), title };
        setItems([...items, newItem]);
        setTitle('');
    };

    const removeItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    };

    const filteredItems = items.filter(item => 
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <App
            items={filteredItems}
            title={title}
            setTitle={setTitle}
            search={search}
            setSearch={setSearch}
            addItem={addItem}
            removeItem={removeItem}
        />
    );
}

export default Container;
