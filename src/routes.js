import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Cart from './Component/Cart/Cart';
import Profile from './Component/Profile/Profile';
import AddListing from './Component/AddListing/AddListing';

const routes = (
    <Switch>
        
        <Route exact path = '/' component = {Home} />
        <Route path="/login" component = {Login} />
        <Route path="/cart" component = {Cart} />
        <Route path="/profile" component = {Profile} />
        <Route path="/add" component = {AddListing} />
       
    </Switch>
    

);

export default routes;