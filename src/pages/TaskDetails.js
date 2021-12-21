import React, { Component } from 'react';
import * as store from '../helpers/store';

export default class TaskDetails extends Component {
  constructor() {
    super();

    const task = store.getTask(window.location.pathname.match(/[^/]+$/)[0]);
    console.log(task);
    this.state = {
      task: task.task,
      uniqKey: task.uniqKey,
      desc: task.desc,
    };
  }

  enterFunc = (event) => {
    event.preventDefault();
    const { desc, uniqKey } = this.state;
    // if (desc !== oldDesc) {
    store.replaceTaskInDetail(uniqKey, desc);
    // }
  }

  changeInput = ({ target: { value } }) => {
    this.setState({
      desc: value,
    });
  }

  render() {
    const { task, desc } = this.state;
    return (
      <main className="d-flex main flex-column col-12 align-items-start">
        <h1 className="col-12 text-center">{`Detalhes da tarefa: "${task}"`}</h1>
        <label className="d-flex justify-content-between offset-2" htmlFor="desc">
          <p className="text-start">
            Detalhes da tarefa:
          </p>
          <textarea
            id="desc"
            placeholder="descrição..."
            value={ desc }
            onChange={ this.changeInput }
            className="mx-2 bg-grey-2"
          />
          <button
            onClick={ this.enterFunc }
            className="btn-n-outline-success px-2"
            type="submit"
          >
            Button
          </button>
        </label>
      </main>
    );
  }
}
