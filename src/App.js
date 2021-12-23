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

  callback = () => {
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
          path="/task_details/:taskId"
        >
          <Header />
          {switcher
          && <TaskDetails callback={ this.callback } /> }
          <Footer />
        </Route>
        <Route
          path="/"
          exact
        >
          <Header />
          {switcher
            && <Home callback={ this.callback } /> }
          <Footer />
        </Route>
      </Switch>
    );
  }

  render() {
    return (
      <div
        className="
        d-flex flex-wrap align-items-center justify-content-center"
      >
        {this.routes()}
      </div>
    );
  }
}
