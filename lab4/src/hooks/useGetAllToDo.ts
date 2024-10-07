// src/hooks/useGetAllToDo.ts
import { useState, useEffect } from 'react';

const useGetAllToDo = () => {
  const [data, setData] = useState<{ id: number; title: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const getData = async () => {
          const res = await fetch('https://jsonplaceholder.typicode.com/todos');
          const todos = await res.json();
          setData(todos.slice(0, 20)); 
          setIsLoading(false);
      };
      getData();
  }, []);

  return { data, isLoading };
};

export default useGetAllToDo;
