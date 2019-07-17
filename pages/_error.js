import React from 'react';
import Link from 'next/link';

const _error = () => {
    return (
        <div>
            <h1>Ooops, something went wrong.</h1>
            <h2>Try <Link href="/"><a>going back</a></Link>.</h2>
            
        </div>
    )
};

export default _error;
