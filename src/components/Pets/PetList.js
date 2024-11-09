// src/components/Pets/PetList.js
import React, { useState, useEffect } from 'react';
import { getPets } from '../../firebase/petService';

const PetList = () => {
  const [pets, setPets] = useState([]); // Inicializa como array vazio

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const petsData = await getPets();
        setPets(petsData); // Atualiza o estado com os dados obtidos
      } catch (error) {
        console.error("Erro ao obter pets:", error);
      }
    };
    fetchPets();
  }, []);

  if (!pets || pets.length === 0) {
    return <div>Nenhum pet encontrado.</div>;
  }

  return (
    <div>
      {pets.map((pet) => (
        <div key={pet.id}>
          <h3>{pet.petName}</h3>
          {/* Outros detalhes do pet */}
        </div>
      ))}
    </div>
  );
};

export default PetList;
