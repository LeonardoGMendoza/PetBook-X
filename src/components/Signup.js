import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate para redirecionamento
import { auth } from '../firebase/firebaseConfig';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Instanciando o navigate

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Conta criada com sucesso!');
      // Redireciona para a página de login após o cadastro
      navigate('/login'); // O usuário é redirecionado para /login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Criar Conta</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
        />
        <button type="submit">Criar Conta</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default SignUp;
