import React from 'react';
import { NavLink } from 'react-router-dom';

//Basic styling for NavLinks
const linkStyles = {
    display: 'inline-block',
    width: '50px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  };


//When we use NavLink we need to use it with a NavBar component (if we don't need a NavBar then we would just use Link instead of NavLinks)
function NavBar(){
    //activeStyle means that when that specific page is rendered the button will have a darkblue background. 
    return(
      <div>
        <NavLink
          to='/'
          exact
          style={linkStyles}
          activeStyle={{background:'darkblue',}}
          >
            Home
          </NavLink>
  
          <NavLink
            to='/about'
            exact
            style={linkStyles}
            activeStyle={{background: 'darkblue',}}
            >
              About
            </NavLink>
  
            <NavLink
              to='/login'
              exact
              style={linkStyles}
              activeStyle={{background: 'darkblue',}}
              >
                Login
              </NavLink>
      </div>
    )
  }

export default NavBar;