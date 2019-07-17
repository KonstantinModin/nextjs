import React from 'react';
import User from '../../components/User';

const authIndexPage = (props) => {
    console.log('props', props);
    return (
        <div>
            <h1>The Auth Index Page ({props.name})</h1>
            <User name="Waldemar" age="24" />
        </div>
    );
};

authIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "Super App (Auth)!"});
        }, 1000);
    });
    return promise;
};

export default authIndexPage;