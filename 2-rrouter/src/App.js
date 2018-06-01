import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';

import HomePage from './HomePage';
import StaticPage from './StaticPage';
import NotFound from './NotFound';

export default class App extends Component {
    render() {
        return (
            <div>
            
                <Switch>    
                    <Route path="/static-page" component={StaticPage} />
                    <Route path="/" component={HomePage} exact />
                    <Route component={NotFound} />
                </Switch>
            
                <nav>
                    <ul>
                        <li>
                            <NavLink exact activeStyle={{ color: 'red' }} to="/">Home Page</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={{ color: 'red' }} to="/static-page">Static Page</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
