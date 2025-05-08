import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Routes } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Router path="*" element={<App />} />
      </Routes>
    </BrowserRouter> */}
    <App />
  </React.StrictMode>
);
