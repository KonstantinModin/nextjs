import React from 'react';
// import './User.css';

const User = ({ name, age}) => {
    console.log('props User', name, age);
    
    return (
        <div className="User">
            <h1>{name}</h1>
            <h2>Age: {age}</h2>
            <style jsx>{`
                .User {
                    border: 1px solid #eee;
                    box-shadow: 0 2px 3px #ccc;
                    padding: 20px;
                    text-align: center;
                    width: 300px;
                }    
            `}</style>
        </div>
    );
};

export default User;