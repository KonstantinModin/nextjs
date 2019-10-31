import React from 'react';

const Info = () => {
    return (
        <div>
            <h1>Information</h1>
            {[...Array(20)].map((_,i)=><div key={i}>{Math.random()*i}</div>)}
        </div>
    )
}

export default Info;
