import React, { useState } from 'react';

const EditMemberForm = ({ member, onSave }) => {
  const [editedName, setEditedName] = useState(member.name);
  const [editedGender, setEditedGender] = useState(member.gender);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Проверка наличия имени и пола
    if (!editedName.trim() || !editedGender.trim()) return;

    // Создание объекта с отредактированными данными
    const editedMember = {
      id: member.id, // предположим, что у члена семьи есть уникальный идентификатор
      name: editedName.trim(),
      gender: editedGender.trim()
    };
    
    // Вызов функции обратного вызова для сохранения отредактированных данных
    onSave(editedMember);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          value={editedName} 
          onChange={(e) => setEditedName(e.target.value)} 
        />
      </label>
      <label>
        Gender:
        <select value={editedGender} onChange={(e) => setEditedGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditMemberForm;