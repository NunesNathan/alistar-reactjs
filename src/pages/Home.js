import React, { Component } from 'react';
import List from '../components/List';
import ListManagement from '../components/ListManagement';
import * as store from '../helpers/store';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
    };
  }

  enterFunc = (event) => {
    event.preventDefault();
    const { inputValue } = this.state;
    if (inputValue) {
      store.sendTasks({ task: inputValue });
      this.setState({
        inputValue: '',
      });
    }
  }

  changeInput = ({ target: { value } }) => {
    this.setState({
      inputValue: value,
    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <main className="d-flex flex-column col-12 align-items-center">
        <label
          className="order-1 flex-wrap d-flex flex-row input-group
          w-50 row"
          htmlFor="taskInput"
        >
          <input
            type="text"
            data-testid="query-input"
            placeholder="Tarefa..."
            value={ inputValue }
            onChange={ this.changeInput }
            id="taskInput"
            className="form-control col-9 bg-light"
          />
          <button
            type="submit"
            data-testid="query-button"
            onClick={ this.enterFunc }
            id="taskInput"
            className="btn-outline-success col-3"
          >
            Listar!
          </button>
        </label>
        <List items={ store.getTasks() } />
        <ListManagement />
      </main>
    );
  }
}
