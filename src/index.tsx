import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import useMockAdapter from "src/api/useMockAdapter";
import back from "./assets/back.png"
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styled, { createGlobalStyle } from "styled-components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContextProvider } from "./components/context/context";

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-attachment: fixed;
    background-color:  #0C0D0F;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 60%;
    background-image: url(${back});
    @media (min-width: 600px) {
        background-position: 0% 0%;
    }
}
html {
    width: 100%;
}
`

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});


const RootApp = () => {
    useMockAdapter();
    return (
        <ContextProvider>
            <QueryClientProvider client={queryClient}>
                <Global />
                <App />
                <ToastContainer />
            </QueryClientProvider>
        </ContextProvider>);
};

root.render(
    <React.StrictMode>
        <RootApp />
    </React.StrictMode>,
);
