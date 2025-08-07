import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Adicione esta linha de volta! É ela que carrega toda a estilização.
import './index.css'; 

// 1. Importe seus componentes de página
import Index from './pages/Index'; 
import Sobre from './pages/Quem-Somos'; 
import Serviços from './pages/Nossos-Servicos';
import Equipe from './pages/Equipe'; 
import Contato from './pages/Contato';

// 2. Crie o roteador com a definição de cada rota
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/serviços",
    element: <Serviços />,
  },
  {
    path: "/equipe",
    element: <Equipe />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
]);

// 3. Renderize o RouterProvider
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
