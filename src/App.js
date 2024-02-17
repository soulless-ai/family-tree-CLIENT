import React, { useState } from 'react';
import './App.css';
import Auth from './components/Auth/Auth.js';
import FamilyTree from './components/FamilyTree';
import AddMemberForm from './components/AddMemberForm';
import EditMemberForm from './components/EditMemberForm';
import DeleteMemberButton from './components/DeleteMemberButton';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [member, setMember] = useState({
    name: 'John Doe',
    gender: 'male'
  });

  const handleSave = (editedMember) => {
    console.log('Edited member:', editedMember);
  };

  // Функция для добавления нового члена семьи
  const handleAddMember = (newMember) => {
    console.log('Adding member:', newMember);
  };

  return (
    <div className="App">
      <div className="App-preloader">
        <Auth setLoggedIn={setLoggedIn} />
      </div>
      {loggedIn && (
        <div className="App-main">
          <FamilyTree />
          {/* Передача функции handleAddMember в качестве пропса onAdd */}
          <AddMemberForm onAdd={handleAddMember} />
          <EditMemberForm member={member} onSave={handleSave} />
          <DeleteMemberButton />
        </div>
      )}
    </div>
  );
}

export default App;