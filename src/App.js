import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Layout from './components/Layout';
import SignIn from './pages/Login';
import SignupForm from './components/SignupForm'

const routes = [

  {
    path: '/login',
    component: SignIn,
  },
  {
    path: '/signup',
    component: SignupForm,
  },

]

function App() {
  return (
    <div className="App">
      <Layout>
            <Router>
            <Route path="/" exact component={SignIn} />
              {routes.map(x => (
                <Route {...x} />
              ))}
            </Router>
      </Layout>
    </div>
  );
}

export default App;
