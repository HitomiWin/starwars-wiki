import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ThemeContextProvider from './pages/contexts/ThemeContext';

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
      <BrowserRouter>
       <App />
       <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
      </ThemeContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
