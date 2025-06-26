import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import AziendaPage from './pages/AziendaPage';
import GestisciPage from './pages/GestisciPage'; 
// import CounterPage from './pages/CounterPage'; // <-- COMMENTA QUESTA RIGA
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/azienda" element={<AziendaPage />} />
      {/* <Route path="/counter" element={<CounterPage />} /> */}{/* <-- E COMMENTA QUESTA RIGA */}
      <Route path="/gestisci/:batchId" element={<GestisciPage />} />
    </Routes>
  );
}

export default App;