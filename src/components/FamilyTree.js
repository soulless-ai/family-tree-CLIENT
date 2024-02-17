import React from 'react';

const FamilyTree = ({ data }) => {
  const renderFamily = (person) => (
    <div key={person.name}>
      <div>{person.name}</div>
      {person.children && person.children.map(child => (
        <div key={child.name}>
          <div>{child.name}</div>
          {child.children && child.children.map(grandchild => (
            <div key={grandchild.name}>
              <div>{grandchild.name}</div>
              {/* Повторяйте этот шаблон для каждого уровня вложенности */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ width: '100%', height: '600px', overflow: 'auto', border: '1px solid #ccc', padding: '10px' }}>
      {renderFamily(data)}
    </div>
  );
};

export default FamilyTree;
