import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { database } from '../../firebase/firebaseConfig';
import '../../styles/LoginPage.css';
import Login from './Login';

const LoginPage = () => {
  const [usuariosRecentes, setUsuariosRecentes] = useState([]);

  // Função para buscar usuários do Firestore
  const buscarUsuarios = async () => {
    try {
      const usuariosRef = collection(database, 'usuarios');
      const snapshot = await getDocs(usuariosRef);
      const usuarios = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsuariosRecentes(usuarios);
    } catch (error) {
      console.error("Erro ao buscar usuários: ", error);
    }
  };

  useEffect(() => {
    buscarUsuarios();
  }, []);

  const exemploLogins = [
    { id: 1, name: "Leonardo", imageUrl: "link-da-imagem1.jpg" },
    { id: 2, name: "Leonardo Junior", imageUrl: "link-da-imagem2.jpg" },
  ];

  const loginsRecentes = [
    ...exemploLogins,
    ...usuariosRecentes.map(usuario => ({
      id: usuario.id,
      name: usuario.nome,
      imageUrl: usuario.photoURL || "default-avatar.png",
    })),
  ];

  return (
    <div className="login-page">
      <div className="welcome-section">
        <h1>Bem-vindo ao Petbook X</h1>
        <h2>O Petbook ajuda você a se conectar e compartilhar com seus pets momentos que fazem parte da sua vida</h2>
      </div>

      {/* Seção de login */}
      <div className="login-section">
        <Login /> {/* Inclui o componente de Login */}
        <div className="forgot-password-link">
          <a href="/forgot-password">Esqueceu a senha?</a>
        </div>
        <div className="signup-link">
          <a href="/signup" className="button create-account-button">Criar uma nova conta</a>
        </div>
      </div>

      <div className="recent-logins">
        <h2>Logins recentes</h2>
        <p>Clique na sua foto ou adicione uma conta.</p>
        <div className="login-cards">
          {loginsRecentes.map(usuario => (
            <div key={usuario.id} className="login-card">
              <img src={usuario.imageUrl} alt={usuario.name} />
              <p>{usuario.name}</p>
            </div>
          ))}
          <div className="login-card add-account">
            <span className="plus-icon">+</span>
            <p>Adicionar conta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
