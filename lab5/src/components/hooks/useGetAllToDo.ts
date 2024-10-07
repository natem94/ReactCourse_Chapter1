// src/hooks/useGetAllToDo.ts
import { useState, useEffect } from 'react';

const useGetAllToDo = () => {
    const [data, setData] = useState<{ id: number; title: string }[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/todos');
                const todos = await res.json();
                setData(todos.slice(0, 5)); 
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false); 
            }
        };
        getData();
    }, []);

    return { setData, data, isLoading };
};

export default useGetAllToDo;
