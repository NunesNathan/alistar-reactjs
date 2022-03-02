import React from 'react';
import aListarRouter from './helpers/services';
import './styles/bootstrap.css';
import './styles/myStyles.css';

const App = () => (
  <div
    className="d-flex flex-wrap
    justify-content-center"
  >
    { aListarRouter() }
  </div>
);

export default App;
