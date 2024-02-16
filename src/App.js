import React, { useState } from 'react';
import './App.css';
import FamilyTree from './components/FamilyTree';
import AddMemberForm from './components/AddMemberForm';
import EditMemberForm from './components/EditMemberForm';
import DeleteMemberButton from './components/DeleteMemberButton';

function App() {
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
      <header className="App-header">
        <FamilyTree />
        {/* Передача функции handleAddMember в качестве пропса onAdd */}
        <AddMemberForm onAdd={handleAddMember} />
        <EditMemberForm member={member} onSave={handleSave} />
        <DeleteMemberButton />
      </header>
    </div>
  );
}

export default App;