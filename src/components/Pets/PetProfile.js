import React from 'react';

function PetProfile({ pet }) {
  return (
    <div>
      <h2>Perfil do Pet: {pet.petName}</h2>
      <p>Raça: {pet.raça}</p>
      <p>Likes: {pet.likes}</p>
      <p>Posts:</p>
      <ul>
        {pet.posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
}

export default PetProfile;
