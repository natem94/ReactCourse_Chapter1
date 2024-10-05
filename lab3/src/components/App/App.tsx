// src/components/App/App.tsx
import React from 'react';
import Children from '../ChildrenToDo/Children';
import { AppProps } from '../../types/AppProps'; 
import './App.css';

const App: React.FC<AppProps> = ({ items, removeItem, addItem, title, setTitle, search, setSearch }) => {
    return (
        <div>
            <h1>ToDo</h1>
            <Children 
                items={items}
                onRemove={removeItem} 
                addItem={addItem}
                title={title}
                setTitle={setTitle}
                search={search}
                setSearch={setSearch}
            />
        </div>
    );
};

export default App;
