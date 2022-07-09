import React from "react";
import ReactDOM from "react-dom";

import "./styles/style.css";
import "./styles/media/style.css";
import Provider from "./components/layout/Provider.jsx";

ReactDOM.render(
    <React.StrictMode>
        <Provider />
    </React.StrictMode>,
    document.getElementById("root")
);
