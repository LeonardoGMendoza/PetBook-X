// src/firebase/petService.js
import { app } from './firebaseConfig';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// Obtenha instâncias dos serviços
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

// Exporte os serviços
export { auth, database, storage };

// Funções adicionais
const addPost = (post) => {
  // Lógica para adicionar um post
};

const getPets = () => {
  // Lógica para obter os pets
};

// Exporte as funções necessárias
export { addPost, getPets };
