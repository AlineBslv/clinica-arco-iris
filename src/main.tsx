import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Adicione esta linha de volta! É ela que carrega toda a estilização.
import './index.css'; 

// Renderize o App que já contém toda a configuração de rotas
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
