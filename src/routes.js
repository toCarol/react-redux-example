import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './container/HomeContainer';


export default (
    <div>
        <Switch>
            {/*<Route exact path="/" component={Component} />*/}
            <Route exact path="/" component={Home} />
        </Switch>
    </div>
);