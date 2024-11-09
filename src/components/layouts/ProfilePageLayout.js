import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore'; // Importa o Firestore para acesso aos dados
import '../../styles/ProfilePage.css';

const ProfilePageLayout = () => {
  const { userId } = useParams(); // Pega o 'userId' da URL
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const db = getFirestore();
        const userRef = doc(db, 'users', userId); // Acessa o documento do usuário no Firestore
        const userSnapshot = await getDoc(userRef);

        if (userSnapshot.exists()) {
          setUserData(userSnapshot.data()); // Define os dados do usuário
        } else {
          console.log('Usuário não encontrado');
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  return (
    <div className="profile-page-layout">
      {/* Sidebar Esquerda */}
      <div className="sidebar-left">
        <div className="user-profile">
          <h2>{userData ? userData.nome : 'Carregando...'}</h2>
        </div>
        <ul className="sidebar-menu">
          <li>Amigos</li>
          <li>Lembranças</li>
          <li>Vídeos</li>
          <li>Marketplace</li>
          <li>Feeds</li>
          <li>Eventos</li>
        </ul>
      </div>

      {/* Área Central */}
      <div className="center-content">
        <div className="post-box">
          <input type="text" placeholder="No que você está pensando?" />
          <button>Publicar</button>
        </div>
        <div className="post">
          <p>Postagem de exemplo de um usuário.</p>
        </div>
      </div>

      {/* Sidebar Direita */}
      <div className="sidebar-right">
        <h2>Contatos</h2>
        <ul className="contacts-list">
          <li>Rosa Luzia - Online</li>
          <li>Jhon Pool Diaz Viacaba - Offline</li>
          <li>Giovanny Rincón - Online</li>
          <li>Nelson Nieves - Offline</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePageLayout;
