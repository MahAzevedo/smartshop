import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from './Components/Produtos';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contato from './Components/Contato';
import Produto from './Components/Produto';
import NaoEncontrado from './Components/NaoEncontrado';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
            <Route path="*" element={<NaoEncontrado />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
