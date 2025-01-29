import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ItemProvider from "./store/ItemProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ItemProvider>
    <App />
    </ItemProvider>
);

