import React, { Component } from 'react';
import List from '../components/List';
import ListManagement from '../components/ListManagement';
import * as easier from '../helpers/easiers';
import * as store from '../helpers/store';

export default class Home extends Component {
  constructor(props) {
    super();

    this.state = {
      ...props,
      inputValue: '',
      enableDescs: false,
    };
  }

  enterFunc = (event) => {
    event.preventDefault();
    const { inputValue } = this.state;
    if (inputValue) {
      store.sendTasks({
        task: inputValue,
        uniqKey: easier.createKey(inputValue),
        desc: '',
      });
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

  toggleDescription = () => {
    const { enableDescs: oldValue } = this.state;
    this.setState({
      enableDescs: !oldValue,
    });
  }

  render() {
    const { inputValue, callback, enableDescs } = this.state;
    return (
      <main className="d-flex main flex-column col-12 align-items-center">
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
            className="form-control col-9 bg-grey-2"
          />
          <button
            type="submit"
            data-testid="query-button"
            onClick={ this.enterFunc }
            id="taskInput"
            className="btn-n-outline-success ml-2 col-3"
          >
            Listar!
          </button>
        </label>
        <List
          items={ store.getTasks() }
          callback={ callback }
          enableDescs={ enableDescs }
        />
        <ListManagement
          enableDescs={ enableDescs }
          toggleDesc={ this.toggleDescription }
          callback={ callback }
        />
      </main>
    );
  }
}
