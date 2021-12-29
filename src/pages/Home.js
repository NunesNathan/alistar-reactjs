import React, { Component } from 'react';
import TaskList from '../components/TaskList';
import ListManagement from '../components/ListManagement';
import { createKey } from '../helpers/easier';
import * as store from '../helpers/store';

export default class Home extends Component {
  constructor(props) {
    super();

    this.state = {
      ...props,
      inputValue: '',
      showDescription: false,
      tasks: store.getTasks(),
    };
  }

  sendTask = () => {
    const { inputValue, reRender } = this.state;
    if (inputValue) {
      store.sendTasks({
        task: inputValue,
        uniqKey: createKey(inputValue),
        desc: '',
      });
      this.setState({
        inputValue: '',
      });
      reRender();
    }
  }

  getTaskName = ({ target: { value } }) => {
    this.setState({
      inputValue: value,
    });
  }

  switchDescription = () => {
    const { showDescription: oldValue } = this.state;
    this.setState({
      showDescription: !oldValue,
    });
  }

  render() {
    const { inputValue, reRender, showDescription, tasks } = this.state;
    return (
      <main className="d-flex flex-column container align-items-center">
        <p className="text-center display-5">Afazeres:</p>
        <label
          className="flex-wrap d-flex input-group
          w-50 row"
          htmlFor="taskInput"
        >
          <input
            className="form-control col-9 bg-grey-2"
            placeholder="Tarefa..."
            value={ inputValue }
            onChange={ this.getTaskName }
            id="taskInput"
            name="taskInput"
          />
          <button
            className="btn-n-outline-success col-3"
            type="button"
            onClick={ this.sendTask }
          >
            Listar!
          </button>
        </label>
        <ListManagement
          showDescription={ showDescription }
          switchDescription={ this.switchDescription }
          reRender={ reRender }
        />
        {tasks
          && <TaskList
            tasks={ tasks }
            reRender={ reRender }
            showDescription={ showDescription }
          />}
      </main>
    );
  }
}
