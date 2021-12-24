import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import TaskDetails from './pages/TaskDetails';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      switcher: true,
    };
  }

  reRender = () => {
    this.setState({
      switcher: false,
    }, () => this.setState({
      switcher: true,
    }));
  }

  routes() {
    const { switcher } = this.state;
    return (
      <Switch>
        <Route
          path="/"
          exact
        >
          <Header />
          {switcher
            && <Home reRender={ this.reRender } />}
          <Footer />
        </Route>
        <Route
          path="/task_details/:taskId"
        >
          <Header />
          {switcher
          && <TaskDetails reRender={ this.reRender } /> }
          <Footer />
        </Route>
      </Switch>
    );
  }

  render() {
    return (
      <div
        className="
        d-flex flex-wrap justify-content-center"
      >
        { this.routes() }
      </div>
    );
  }
}
