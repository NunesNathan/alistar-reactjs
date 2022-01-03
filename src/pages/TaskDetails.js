/* eslint-disable no-magic-numbers */
import React, { Component } from 'react';
import $ from 'jquery';
import * as store from '../helpers/store';
import NavList from '../components/NavList';
import Description from '../components/Description';
import { addBorderHome } from '../helpers/event';
import Deadline from '../components/Deadline';

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

  sendDeadline = () => {
    const { uniqKey } = this.state;
    const day = $('#dayNum').val();
    const mounth = $('#mounthsNum').val();
    const year = $('#years').val();
    if ((year > 2022)
      && (mounth > 0)
      && (day > 0)) {
      const deadline = `${day}/${mounth}/${year}`;
      store.replaceTaskDeadline(uniqKey, deadline);
    }
  }

  render() {
    const { task, desc, reRender, deadline, createdOn } = this.state;
    return (
      <main className="d-grid container main">
        <h1
          className="
          row text-center m-auto mb-1
        "
        >
          {`Tarefa: "${task}"`}
        </h1>
        {deadline
          ? (
            <p className="h6 text-muted text-center mb-4">
              {`criado em: ${createdOn} até: ${deadline}`}
            </p>)
          : (
            <p className="h6 text-muted text-center mb-4">
              {`criado em: ${createdOn}`}
            </p>)}
        <div className="row">
          <NavList reRender={ reRender } />
          <div className="col-7 d-flex flex-column justify-content-evenly">
            <Description
              desc={ desc }
              sendDescription={ this.sendDescription }
              getDescription={ this.getDescription }
            />
            <Deadline sendDeadline={ this.sendDeadline } />
          </div>
        </div>
      </main>);
  }
}
