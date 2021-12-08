import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import TaskDetails from './pages/TaskDetails';

export default class App extends Component {
  routes() {
    return (
      <Switch>
        <Route
          path="/"
          exact
        >
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route
          path="/task_details/:taskId"
        >
          <Header />
          <TaskDetails />
          <Footer />
        </Route>
      </Switch>
    );
  }

  render() {
    return (
      <main>
        {this.routes()}
      </main>
    );
  }
}
