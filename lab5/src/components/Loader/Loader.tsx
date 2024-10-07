// src/components/Loader/Loader.tsx
import React from 'react';
import './Loader.css';

interface LoaderProps {
    isLoading: boolean;
    children: React.ReactNode; // Додано тип для children
}

const Loader: React.FC<LoaderProps> = ({ isLoading, children }) => {
    if (!isLoading) {
        return <>{children}</>; // Повертаємо дітей, якщо не завантажуємо
    }

    return (
        <div className="loader-container">
            <p className="loader-text">Loading, please wait...</p>
        </div>
    );
};

export default Loader;
