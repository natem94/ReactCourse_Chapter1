// src/components/Container/Container.tsx
import React, { useState, useEffect } from 'react';
import App from '../App/App';
import useGetAllToDo from '../hooks/useGetAllToDo'; 
import Loader from '../Loader/Loader';

const Container: React.FC = () => {
    const { data, isLoading } = useGetAllToDo(); 
    const [search, setSearch] = useState('');
    const [title, setTitle] = useState('');
    const [items, setItems] = useState<{ id: number; title: string }[]>([]); 

    useEffect(() => {
        if (data.length > 0) {
            setItems(data); 
        }
    }, [data]);

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

    return (
        <Loader isLoading={isLoading}>
            <App
                items={filteredItems} 
                removeItem={removeItem}
                addItem={addItem} 
                title={title} 
                setTitle={setTitle} 
                search={search} 
                setSearch={setSearch} 
            />
        </Loader>
    );
};

export default Container;
