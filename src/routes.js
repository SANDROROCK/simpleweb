import React from 'react';
import {BrowserRouter,Switch,Router } from 'react-router-dom';


import home from './pages/home';
import cases from './pages/cases';
import servicos from './pages/servico';
import sobre from './pages/sobre';


const Routes = ()=>(
    <BrowserRouter>
    <Switch>
        <Router path="/" exact component={home}></Router>
        <Router path="/home" component={home}></Router>
        <Router path="/cases" component={cases}></Router>
        <Router path="/servicos" component={servicos}></Router>
        <Router path="/sobre" component={sobre}></Router>
    </Switch>
    </BrowserRouter>
)
   



export default Routes;



