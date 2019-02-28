// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Board from "./components/Board";

ReactDOM.render(
    <BrowserRouter>
        <Base>
            <Switch>
                <Route exact path="/" component={Main}>
                    <Route path="/play" component={Board} />
                </Route>
            </Switch>
        </Base>
    </BrowserRouter>
    , document.getElementById('root'));