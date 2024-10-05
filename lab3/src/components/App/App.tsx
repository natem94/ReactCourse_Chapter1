// src/components/App/App.tsx
import React from 'react';
import ToDoList from '../ToDoList/ToDoList';

interface AppProps {
    items: { id: number; title: string; }[];
    title: string;
    setTitle: (value: string) => void;
    search: string;
    setSearch: (value: string) => void;
    addItem: () => void;
    removeItem: (id: number) => void;
}

const App: React.FC<AppProps> = ({ items, title, setTitle, search, setSearch, addItem, removeItem }) => {
    return (
        <div className="container">
            <h1>Car Salon</h1>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Add new car"
            />
            <button onClick={addItem}>Add</button>
            <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search car"
            />
            <ToDoList items={items} onRemove={removeItem} />
        </div>
    );
};

export default App;
