import React from 'react';

const User = ({ name, age}) => {
    console.log('props User', name, age);
    
    return (
        <div>
            <h1>{name}</h1>
            <h2>Age: {age}</h2>
        </div>
    );
};

export default User;