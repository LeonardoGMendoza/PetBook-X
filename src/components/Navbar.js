// src/components/Navbar.js ou componente do cabeçalho
import logo from '../assets/logo.png'; // Ajuste o caminho conforme necessário

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Petbook X Logo" style={{ width: '120px', height: 'auto' }} />
    </nav>
  );
}

export default Navbar;
