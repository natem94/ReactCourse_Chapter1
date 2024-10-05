// src/hooks/useToDoList.ts
import { useState } from 'react';

// Інтерфейс для ToDo елементу
interface ToDoItem {
    id: number;
    title: string;
}

// Кастомний хук для управління списком ToDo
const useToDoList = () => {
    const [items, setItems] = useState<ToDoItem[]>([]);

    const addItem = (title: string) => {
        if (title.trim() === '') return; // Не дозволяє додавати пусті записи
        const newItem = { id: Date.now(), title };
        setItems(prevItems => [...prevItems, newItem]);
    };

    const removeItem = (id: number) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return { items, addItem, removeItem };
};

export default useToDoList;
