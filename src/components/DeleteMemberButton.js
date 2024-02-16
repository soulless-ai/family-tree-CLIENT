import React from 'react';

const DeleteMemberButton = ({ member, onDelete }) => {
    const handleDelete = () => {
        // Передача идентификатора удаляемого члена семьи в функцию обратного вызова onDelete
        onDelete(member.id); // предположим, что у члена семьи есть уникальный идентификатор
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
};

export default DeleteMemberButton;