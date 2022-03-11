import React from 'react';
import TaskContext from './context/TasksContext';
import aListarRouter from './helpers/services';
import './styles/bootstrap.css';
import './styles/myStyles.css';

const AListarApp = () => (
  <TaskContext>
    <div
      className="d-flex flex-wrap
      justify-content-center"
    >
      { aListarRouter() }
    </div>
  </TaskContext>
);

export default AListarApp;
