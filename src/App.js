import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import TaskDetails from './pages/TaskDetails';
import './styles/bootstrap.css';
import './styles/myStyles.css';

const App = () => {
  const routes = () => (
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

  return (
    <div
      className="d-flex flex-wrap
      justify-content-center"
    >
      { routes() }
    </div>
  );
};

export default App;
