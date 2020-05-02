import React from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app/app";

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider store={store}>
            <Router>
                <App />
            </Router>
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
