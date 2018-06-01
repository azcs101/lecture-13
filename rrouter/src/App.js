import React, { Component } from 'react';

import HomePage from './HomePage';
import StaticPage from './StaticPage';

export default class App extends Component {
    render() {
        return (
            <div>
                <HomePage />
                <StaticPage />
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home Page</a>
                        </li>
                        <li>
                            <a href="/static-page">Static Page</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
