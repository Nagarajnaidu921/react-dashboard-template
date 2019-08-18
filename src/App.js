import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Layout from './components/Layout';
import SignIn from './pages/Login';
import Home from './pages/Home';
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

            <Route path="/" exact component={Home} />
              {routes.map(x => (
                <Route {...x} />
              ))}

      </Layout>
    </div>
  );
}

export default App;
