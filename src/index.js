// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {createStore} from "redux";
import { Provider } from "react-redux";
import Base from "./components/Base";
import Main from "./components/Main/Main";
import MemoryGame from "./components/Board/MemoryGame";
import reducer from "./reducers/reducer";

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Base>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/play" component={MemoryGame} />
                </Switch>
            </Base>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));