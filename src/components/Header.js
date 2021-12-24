import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="my-4 border-bottom">
        <div className="container d-flex text-center flex-column">
          <p className="display-3">À listar</p>
          <p className="lead">O seu simples organizador de tarefas!</p>
        </div>
      </header>
    );
  }
}
