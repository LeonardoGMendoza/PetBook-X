import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Início</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Criar Conta</Link>
    </nav>
  );
}

export default Navbar;
