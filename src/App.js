import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/Signup';  // Corrija a capitalização
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import ProfilePage from './components/HomePage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        {/* Definindo a rota para o perfil, com um parâmetro dinâmico */}
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
