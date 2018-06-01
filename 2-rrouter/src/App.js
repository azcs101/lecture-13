import React, { Component } from 'react';

import HomePage from './HomePage';
import StaticPage from './StaticPage';
import NotFound from './NotFound';

export default class App extends Component {
    render() {
        return (
            <div>
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
