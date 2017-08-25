import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './components/BaseLayout';
import NavBar from './components/NavBar';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Shop from './components/Shop'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <NavBar />
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/" component={Home}/>
        </Switch>
    </BaseLayout>
  </BrowserRouter>

  ,
  document.getElementById('root'));
registerServiceWorker();
