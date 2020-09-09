import React, { useState } from 'react';

import { Link, Route, Redirect } from 'react-router-dom';
import Admin from './Admin';
const PrivateRoute = ({component: Component, authed, ...rest}) => {
    return (
      <Route
        {...rest}
        render={(props) => authed===true 
          ? <Component {...props} />
          : <Redirect to={{pathname: '/Admin', state: {from: props.location}}} />} />
    )
  }
export const Login = props => {
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    const login = () => {
    setRedirectToReferrer(true);
    };

    const { from } = props.location.state || { from: { pathname: "/Admin" } };

    // if (redirectToReferrer) {
    // return <Redirect to={from} />;
    // }
   

    return (
    <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={login}>Log in</button>
        {console.log(redirectToReferrer)}
        {/* {redirectToReferrer && props.history.push('/Admin')} */}
         <PrivateRoute authed={redirectToReferrer} path='/Admin' component={Admin}  />
    </div>
    );
};
export const fakeAuth = {
    isAuthenticated: true,
    authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
    }
};
