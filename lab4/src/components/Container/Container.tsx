// src/components/Container/Container.tsx
import React, { useState} from 'react';
import App from '../App/App';
import useGetAllToDo from '../../hooks/useGetAllToDo'; 


const Container: React.FC = () => {
    const { data: items, setData: setItems, isLoading } = useGetAllToDo()
    const [search, setSearch] = useState('');
    const [title, setTitle] = useState('');

    const addItem = (newTitle: string) => {
        const newItem = {
            id: Math.max(0, ...items.map(item => item.id)) + 1, 
            title: newTitle,
        };
        setItems(prevItems => [...prevItems, newItem]);
        console.log(`Added item: ${newTitle}`);
    };

    const removeItem = (id: number) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
        console.log(`Removed item with id: ${id}`);
    };

    const filteredItems = items.filter(item => 
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <App
            items={filteredItems} 
            removeItem={removeItem}
            addItem={addItem} 
            title={title} 
            setTitle={setTitle} 
            search={search} 
            setSearch={setSearch} 
        />
    );
};

export default Container;
