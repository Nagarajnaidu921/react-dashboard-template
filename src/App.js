import React from 'react';
import { Route, Redirect } from "react-router-dom";

import './App.css';
import Layout from './components/Layout';
import SignIn from './pages/Login';
import Home from './pages/Home';
import Users from './pages/Users';
import SignupForm from './components/SignupForm'
import AuthServ from './services/Auth/auth.service';

const routes = [

  {
    path: '/login',
    component: SignIn,
    isSecure: false
  },
  {
    path: '/signup',
    component: SignupForm,
    isSecure: false
  },
  {
    path: '/users',
    component: Users,
    isSecure: true
  },

]

const SecureRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    AuthServ.isLoggedIn ?  <Component {...props} /> :  <Redirect to='/login' />
)}/>
)

function App() {
  return (
    <div className="App">
      <Layout>
            <Route path="/" exact component={Home} />
              {routes.map((x, id) => (
                x.isSecure === true ? <SecureRoute key={id} {...x}/> :
                <Route key={id} {...x} />
              ))}

      </Layout>
    </div>
  );
}

export default App;
