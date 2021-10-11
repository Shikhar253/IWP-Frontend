import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header'
import Roadmap from './components/Roadmap'
import Updates from './components/Updates'
import Interview from './components/Interview'

ReactDOM.render(
  <React.StrictMode>
       <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/interview" component={Interview} />
        <Route path="/roadmap" component={Roadmap} />
        <Route path="/updates" component={Updates} />
        
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
