import React, { Component } from 'react';
import * as store from '../helpers/store';
import NavList from '../components/NavList';
import Description from '../components/Description';
import { addBorderHome } from '../helpers/event';

export default class TaskDetails extends Component {
  constructor(props) {
    super();

    const task = store.getTaskByKey();
    this.state = {
      ...task,
      ...props,
    };
  }

  componentDidMount() {
    addBorderHome();
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
          <NavList reRender={ reRender } />
          <Description
            desc={ desc }
            sendDescription={ this.sendDescription }
            getDescription={ this.getDescription }
          />
        </div>
      </main>);
  }
}
