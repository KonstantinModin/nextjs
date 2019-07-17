import React from 'react';
import User from '../../components/User';

const authIndexPage = (props) => {
    console.log('props', props);
    return (
        <div>
            <h1>The Auth Index Page</h1>
            <User name="Waldemar" age="24" />
        </div>
    );
};

export default authIndexPage;