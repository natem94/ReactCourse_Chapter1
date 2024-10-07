import { useState, useEffect } from 'react';

const useFetchChildren = () => {
    const [children, setChildren] = useState<{ id: number; name: string; }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.example.com/children'); 
                const data = await response.json();
                setChildren(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return { children, setChildren };
};

export default useFetchChildren;
