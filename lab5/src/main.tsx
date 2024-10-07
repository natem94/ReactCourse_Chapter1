// src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import Container from './components/Container/Container'; // Тепер рендеримо Container
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
