// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(
// <StrictMode>
// <App />
// </StrictMode>
// );
// deletar o <StrictMode> pq ele renderiza duas vezes e isso atrapalha , aqui eu só comitei

import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
