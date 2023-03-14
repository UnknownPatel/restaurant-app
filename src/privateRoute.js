import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import signinUser from '.pages/signin';


const PrivateRoute = ({children, ...rest}) => {
  const signinUser = false;
  return(<Route {...rest} render={()=>signinUser?(children):(<Redirect to={'/'}/>)}/>);
} 

export default PrivateRoute;
