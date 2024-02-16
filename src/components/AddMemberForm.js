import React, { useState } from 'react';

const AddMemberForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Проверка наличия имени и пола
    if (!name.trim() || !gender.trim()) return;
    
    // Создание нового члена семьи
    const newMember = {
      name: name.trim(),
      gender: gender.trim()
    };
    
    // Вызов функции обратного вызова для добавления нового члена семьи
    onAdd(newMember);
    
    // Очистка формы после добавления
    setName('');
    setGender('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <button type="submit">Add Member</button>
    </form>
  );
};

export default AddMemberForm;