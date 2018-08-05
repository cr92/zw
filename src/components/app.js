'use strict';

const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

const Nav = require('./nav.js');
const Home = require('./home.js');
const Add = require('./add.js');
const Edit = require('./edit.js');

class App extends React.Component {
  render() {
    return (
    <Router>
      <div className='container'>
        <Nav/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/add' component={Add}/>
            <Route path='/edit/:id' component={Edit}/>
            <Route render={function () {
              return <p>404</p>
            }}/>
          </Switch>
        </div>
      </Router>)
  }
}

module.exports = App;