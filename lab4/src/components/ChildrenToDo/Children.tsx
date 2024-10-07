// src/components/ChildrenToDo/Children.tsx
import React from 'react';
import ToDoList from '../ToDoList/ToDoList';

interface ChildrenProps {
    items: { id: number; title: string }[];
    onRemove: (id: number) => void;
    addItem: (title: string) => void;
    title: string;
    setTitle: (title: string) => void;
    search: string;
    setSearch: (search: string) => void;
}

const Children: React.FC<ChildrenProps> = ({ items, onRemove, addItem, title, setTitle, search, setSearch }) => {
    
    const handleAddItem = () => {
        if (title.trim() !== '') {
            addItem(title);  
            setTitle('');  
        }
    };

    return (
        <div>
            <div className="input-container">
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Add new children"
                />
                <button className="add-button" onClick={handleAddItem}>Add</button>
            </div>
            <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search children"
                className="search-input"
            />
            <ToDoList items={items} onRemove={onRemove} />
        </div>
    );
};

export default Children;
