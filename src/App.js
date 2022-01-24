import React from "react";
import {Route, Switch} from 'react-router-dom';
import NavBar from "./NavBar";
import Home from './Home';
import Login from "./Login";
import About from "./About";

//Step 2: Use <Route> components to define client-side routes in the app. This component will render the child component when the URL matches the specified path(in this case the path is '/'). This component also has to be wrapped around each component we want it to affect. 

//Adding the Switch component and exact before path will literally route the browser to the matching URL ONLY. We can add the exact path to just home component since the / matches with everything but i like adding it to all to be safe. 
function App() {
    return (
      <div>
        {/* NavBar component does not need to be wrapped by anything */}
        <NavBar/>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About/>
          </Route> 
          <Route exact path='/login'>
            <Login/>
          </Route> 
        </Switch>
      </div> 
    );
  }





export default App;