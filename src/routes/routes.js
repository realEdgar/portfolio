import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from '../components/Header/index.js'
import { Footer } from '../components/Footer/index.js'
import { Home } from '../pages/Home'
import { Projects } from '../pages/Projects'
import { Contact } from '../pages/Contact'

export const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contacto" component={Contact} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}
