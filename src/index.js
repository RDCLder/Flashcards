// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Local Dependencies
import reducer from "./reducers/reducer";

const store = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Base>
                <Switch>
                    <Route exact path="/" component={Menu} />
                    <Route path="/" component={Menu} />
                    <Route path="/" component={Menu} />
                    <Route path="/" component={Menu} />
                </Switch>
            </Base>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);