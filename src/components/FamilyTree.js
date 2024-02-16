import React from 'react';
import Tree from 'react-d3-tree';

const familyData = {
    name: 'John',
    children: [
        {
            name: 'Jane',
            attributes: {
                gender: 'female'
            }
        },
        {
            name: 'Jack',
            attributes: {
                gender: 'male'
            }
        }
    ]
    };

    const FamilyTree = () => {
    return (
        <div style={{ width: '100%', height: '600px' }}>
            <Tree data={familyData} />
        </div>
    );
};

export default FamilyTree;