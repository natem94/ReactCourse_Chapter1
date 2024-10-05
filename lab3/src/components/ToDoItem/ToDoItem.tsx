// src/components/ToDoItem/ToDoItem.tsx
import React from 'react';

interface ToDoItemProps {
    item: { id: number; title: string; };
    onRemove: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ item, onRemove }) => {
    return (
        <tr>
            <td>{item.title}</td>
            <td>
                <button className="remove-btn" onClick={() => onRemove(item.id)}>Remove</button>
            </td>
        </tr>
    );
}

export default ToDoItem;
