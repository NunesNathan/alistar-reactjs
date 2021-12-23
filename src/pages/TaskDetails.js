import React, { Component } from 'react';
import PropType from 'prop-types';
import * as store from '../helpers/store';
import BackToHome from '../components/BackToHome';

export default class TaskDetails extends Component {
  constructor() {
    super();

    const task = store.getTaskByKey(window.location.pathname.match(/[^/]+$/)[0]);
    this.state = {
      task: task.task,
      uniqKey: task.uniqKey,
      desc: task.desc,
    };
  }

  enterFunc = (event) => {
    event.preventDefault();
    const { desc, uniqKey } = this.state;
    if (desc) {
      store.replaceTaskDetail(uniqKey, desc);
    }
  }

  changeInput = ({ target: { value } }) => {
    this.setState({
      desc: value,
    });
  }

  render() {
    const { callback } = this.props;
    const { task, desc } = this.state;
    return (
      <main className="d-grid container main">
        <h1
          className="
          row text-center m-auto mb-4
        "
        >
          {`Detalhes da tarefa: "${task}"`}

        </h1>
        <div className="row">
          <label className="d-flex col-7 justify-content-center" htmlFor="desc">
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
          <BackToHome callback={ callback } />
        </div>
      </main>
    );
  }
}

TaskDetails.propTypes = {
  callback: PropType.func.isRequired,
};
