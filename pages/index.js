import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {
    static async getInitialProps(context) {
        console.log('context', context);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({appName: "Super App!"});
            }, 1000);
        });
        return promise;
    };
    
    eventHandler = (event) => {
        Router.push('/auth');
    };

    render() {
        return (
            <div>
                <h1>The Main Page of {this.props.appName}</h1>
                <h2>Go to <Link href="/auth"><a>Auth</a></Link></h2>
                <button onClick={this.eventHandler}>Auth</button>
            </div>
        );

    }

};

export default IndexPage;
