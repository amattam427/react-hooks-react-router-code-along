import React from "react";
import ReactDOM from "react-dom";
//Step 1: import the react-router functions
import {BrowserRouter} from 'react-router-dom';
import App from './App'



//Step 3: Use the <BrowserRouter> component to wrap the entire app & provide React Router context features. This component will always wrap around the top parents component that renders/holds all the components to the app (normall the app component). It will allow us to use to the Route component and any other react router components anywhre in the app.
ReactDOM.render(
  <BrowserRouter>
    <App /> 
  </BrowserRouter>,
  document.getElementById("root")


);
