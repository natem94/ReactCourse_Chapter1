// src/hooks/useToDoList.ts
import { useState } from 'react';


interface ToDoItem {
    id: number;
    title: string;
}


const useToDoList = () => {
    const [items, setItems] = useState<ToDoItem[]>([]);

    const addItem = (title: string) => {
        if (title.trim() === '') return; 
        const newItem = { id: Date.now(), title };
        setItems(prevItems => [...prevItems, newItem]);
    };

    const removeItem = (id: number) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return { items, addItem, removeItem };
};

export default useToDoList;
