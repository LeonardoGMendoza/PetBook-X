import React from 'react';
import { handleAddFriend } from '../../firebase/petService';

function AddFriend({ petId, friendId }) {
  const addFriend = async () => {
    await handleAddFriend(petId, friendId);
    alert('Amigo adicionado com sucesso!');
  };

  return (
    <button onClick={addFriend}>Adicionar Amigo</button>
  );
}

export default AddFriend;
