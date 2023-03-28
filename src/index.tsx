import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

if (window.__POWERED_BY_WUJIE__) {
    window.__WUJIE_MOUNT = () => {
        ReactDOM.createRoot(
            document.getElementById("root") as HTMLElement
        ).render(<App />);
    };
    window.__WUJIE_UNMOUNT = () => {
        ReactDOM.createRoot(
            document.getElementById("root") as HTMLElement
        ).unmount();
    };
    window.__WUJIE.mount();
} else {
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
        <App />
    );
}
