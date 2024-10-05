import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
// deletar o <StrictMode> pq ele resnderiza duas vezes e isso atrapalha , aqui eu só comitei
