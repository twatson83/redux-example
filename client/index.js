import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import itemApp from './reducer';
import App from './App';

const store = createStore(itemApp);

render(
    <Provider store={store}><App /></Provider>,
    document.getElementById("app")
);