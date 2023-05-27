import { render } from "react-dom";
import { App } from "./App";
import { StoreProvider } from "./app/StoreProvider/index";
import './app/styles/index.scss'
import { BrowserRouter } from "react-router-dom";

render(
    <BrowserRouter>
        <StoreProvider>
            <App />
        </StoreProvider>,
    </BrowserRouter>,
    document.getElementById('root'),
)