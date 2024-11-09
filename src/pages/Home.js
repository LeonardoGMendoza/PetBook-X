import React from 'react';
import PetList from '../components/Pets/PetList';
import AddPost from '../components/Pets/AddPost';

function Home() {
  return (
    <div>
      <h1>Feed dos Pets</h1>
      <AddPost />
      <PetList />
    </div>
  );
}

export default Home;
