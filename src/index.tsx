import React from "react";

import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import { Provider } from "react-redux";
import { Router } from "react-router";

import App from "./App";
import { store } from "./redux/store";
import "./styles/main.scss";
import reportWebVitals from "./reportWebVitals";
import history from "./utils/history";

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <Provider store={store}>
                <MoralisProvider
                    // serverUrl='https://2oxp5kduuqph.usemoralis.com:2053/server'
                    // appId='OW91y2pLshtz1VK5qZStiKfmnM3DqMFEnj4Kcops'
                    serverUrl='https://rcsun7ombvks.usemoralis.com:2053/server'
                    appId='Zv33oMmcSSKGo3fz2Gg5wXoqgZZdOKFWUJ0pJssC'
                >
                    <App />
                </MoralisProvider>
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
