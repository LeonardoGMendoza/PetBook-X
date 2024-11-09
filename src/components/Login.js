import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth(); // Certifique-se de que o Firebase foi inicializado corretamente

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate(`/profile/${auth.currentUser.uid}`); // Redireciona para a página de perfil com o UID do usuário
      console.log('Login bem-sucedido!');
    } catch (error) {
      setErrorMessage('Erro ao fazer login. Verifique suas credenciais.');
      console.error("Erro ao fazer login: ", error);
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <div className="logo-section">
        {/* Adicione seu logo aqui, se desejar */}
      </div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <button type="submit">Entrar</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default Login;
