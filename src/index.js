import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.js"
import {store} from "./store";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import NavProvider from "./Context/NavContext.js";


const element =  document.getElementById("root");

const root = ReactDom.createRoot(element);

root.render(
<NavProvider>  
  <Provider store={store}>
    <App />
  </Provider>
</NavProvider>
);