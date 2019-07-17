import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const indexPage = () => {
    const eventHandler = (event) => {
        Router.push('/auth');
    };

    return (
        <div>
            <h1>The Main Page</h1>
            <h2>Go to <Link href="/auth"><a>Auth</a></Link></h2>
            <button onClick={eventHandler}>Auth</button>
        </div>
    );
};

export default indexPage;
