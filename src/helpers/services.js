import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../pages/Home';
import TaskDetails from '../pages/TaskDetails';

const aListarRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route
        path="/"
        exact
        component={ Home }
      />
      <Route
        path="/task_details/:taskId"
        component={ TaskDetails }
      />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default aListarRouter;
