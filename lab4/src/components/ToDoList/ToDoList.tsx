// src/components/ToDoList/ToDoList.tsx
import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';

interface ToDoListProps {
    items: { id: number; title: string; }[];
    onRemove: (id: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ items, onRemove }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <ToDoItem key={item.id} item={item} onRemove={onRemove} />
                ))}
            </tbody>
        </table>
    );
}

export default ToDoList;
