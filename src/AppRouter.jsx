import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { CineCasaHome } from './pages/CineCasaHome';
import { CineCasaPoliticas } from './pages/CineCasaPoliticas';
import { CineCasaCondiciones } from './pages/CineCasaCondiciones';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cinecasa" element={<CineCasaHome />} />
        <Route path="/cinecasa_politicas" element={<CineCasaPoliticas />} />
        <Route path="/cinecasa_condiciones_servicios" element={<CineCasaCondiciones />} />
      </Routes>
    </BrowserRouter>
  );
};

