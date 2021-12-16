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
      <>
        <label htmlFor="taskInput">
          <input
            type="text"
            data-testid="query-input"
            placeholder="Tarefa..."
            value={ inputValue }
            onChange={ this.changeInput }
            id="taskInput"
          />
          <button
            type="submit"
            data-testid="query-button"
            onClick={ this.enterFunc }
            id="taskInput"
          >
            Listar!
          </button>
          <List items={ store.getTasks() } />
        </label>
        <ListManagement />
      </>
    );
  }
}
