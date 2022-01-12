import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserLoggedinContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
const [loggedinUser, setLoggedinUser] = useContext(UserLoggedinContext)

    return (
        <Route
      {...rest}
      render={({ location }) =>
      loggedinUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;