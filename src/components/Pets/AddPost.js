import React, { useState } from 'react';
import { addPost } from '../../firebase/petService';

function AddPost({ petId }) {
  const [postContent, setPostContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost(petId, postContent);
    setPostContent('');
    alert('Post adicionado com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="Escreva seu post..."
      />
      <button type="submit">Adicionar Post</button>
    </form>
  );
}

export default AddPost;
