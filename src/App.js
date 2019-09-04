import React from 'react';
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Layout from './components/Layout';
import SignIn from './pages/Login';
import Home from './pages/Home';
import Users from './pages/Users';
import Profile from './pages/Profile';
import SignupForm from './components/SignupForm'
import SideNav from './components/SideNav';
import AuthServ from './services/Auth/auth.service';
import *  as AuthInterceptor from './services/Auth/authInterceptor.service';

AuthInterceptor.init();

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
  {
    path: '/profile',
    component: Profile,
    isSecure: true
  },

]

const SecureRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    AuthServ.isLoggedIn ? <Component {...props} /> : <Redirect to='/login' />
  )} />
)

function App() {
  const [tempSideNavOpen, setTempSideNavOpen] = React.useState(false);
  const handleTempSideNavToggle = () => {
    setTempSideNavOpen(!tempSideNavOpen)
}
  return (
    <div className="App">
      <Layout
      handleTempSideNavToggle={handleTempSideNavToggle}
      >
        <Router>
          <SideNav
           tempSideNavOpen={tempSideNavOpen}
           handleTempSideNavToggle={handleTempSideNavToggle}
          />
          <Route path="/" exact component={Home} />
          {routes.map((x, id) => (
            x.isSecure === true ? <SecureRoute key={id} {...x} /> :
              <Route key={id} {...x} />
          ))}
        </Router>
      </Layout>
    </div>
  );
}

export default App;
