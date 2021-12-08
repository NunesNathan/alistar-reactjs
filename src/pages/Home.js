import React, { Component } from 'react';
import List from '../components/List';
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
    store.sendTasks(inputValue)
    this.setState({
      inputValue: '',
    })
  }

  changeInput = ({ target: { value } }) => {
    this.setState({
      inputValue: value,
    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <label htmlFor="get">
        <input
          type="text"
          data-testid="query-input"
          value={ inputValue }
          onChange={ this.changeInput }
          id="get"
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.enterFunc }
          id="get"
        >
          Buscar!
        </button>
        <List items={ store.getTasks() } />
      </label>
    );
  }
}
