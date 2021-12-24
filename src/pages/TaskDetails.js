import React, { Component } from 'react';
import * as store from '../helpers/store';
import NavList from '../components/NavList';

export default class TaskDetails extends Component {
  constructor(props) {
    super();

    const task = store.getTaskByKey();
    this.state = {
      ...task,
      ...props,
    };
  }

  sendDescription = () => {
    const { desc, uniqKey } = this.state;
    if (desc) {
      store.replaceTaskDescription(uniqKey, desc);
    }
  }

  getDescription = ({ target: { value } }) => {
    this.setState({
      desc: value,
    });
  }

  render() {
    const { task, desc, reRender } = this.state;
    return (
      <main className="d-grid container main">
        <h1
          className="
          row text-center m-auto mb-4
        "
        >
          {`Tarefa: "${task}"`}
        </h1>
        <div className="row">
          <label className="d-flex col-7 justify-content-center" htmlFor="desc">
            Detalhes da tarefa:
            <textarea
              placeholder="descrição..."
              value={ desc }
              onChange={ this.getDescription }
              className="mx-1 bg-grey-2"
            />
            <button
              onClick={ this.sendDescription }
              className="btn-n-outline-success"
              type="button"
            >
              Submit
            </button>
          </label>
          <NavList reRender={ reRender } />
        </div>
      </main>);
  }
}
