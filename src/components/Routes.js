import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Europe from './Europe';
import Ukraine from './Ukraine';
import Home from "./Home";
import Usa from "./Usa";

const Routes = () =>
    <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route path='/usa'>
            <Usa />
        </Route>
        <Route path='/europe'>
            <Europe />
        </Route>
        <Route path='/products'>
            <Ukraine />
        </Route>
    </Switch>

export default Routes;
