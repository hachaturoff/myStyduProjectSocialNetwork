import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import store from "./redux/redux-store.js";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

let reRender = () => {

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    );
}
// window.store = store
reRender()

