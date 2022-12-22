import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import News from './pages/News';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/news/:id' component={News} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default App;
