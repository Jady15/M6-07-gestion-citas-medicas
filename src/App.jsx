import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Citas from './pages/Citas';
import CitaDetalle from './pages/CitaDetalle';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const [citas] = useState([
    { id: 1, paciente: 'Isaac Luviano', doctor: 'Dr. López', fecha: '2025-07-25', hora: '10:00', motivo: 'Consulta general' },
    { id: 2, paciente: 'Mark Luviano', doctor: 'Dra. Martínez', fecha: '2025-07-26', hora: '14:30', motivo: 'Revisión anual' },
  ]);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link> |{' '}
        <Link to="/citas">Ver Citas</Link>
      </nav>
      <div className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citas" element={<Citas citas={citas} />} />
        <Route path="/cita/:id" element={<CitaDetalle citas={citas} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;