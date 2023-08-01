import React from 'react';
import './App.css';
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import about from './pages/about'
import signin from './pages/signin/signin'
import Signupform from './pages/signup/signup'

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/about' component={about} />
          <Route exact path='/signin' component={signin} />
          <Route exact path='/signup' component={Signupform} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
