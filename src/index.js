import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//import { addUser } from './actions';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import handleNewMessage from './sagas';
import setupSocket from './sockets';
import username from './utils/name';
import './index.css';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

console.log("username :", username);

const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handleNewMessage, { socket, username })


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
registerServiceWorker();
