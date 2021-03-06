import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home/Home';
import Product from './SingleProduct/Product';
import Header from './Global/Header';
import AppFooter from './Global/AppFooter';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/single/:id">
                        <Product />
                    </Route>
                </Switch>
            <AppFooter/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
