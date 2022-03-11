import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import * as store from '../helpers/store';
import { addBorderHome } from '../helpers/event';
import NavList from '../components/NavList';
import Description from '../components/Description';
import Deadline from '../components/Deadline';

export default function TaskDetails() {
  const currentYear = new Date().getFullYear();

  const { task, desc: description, uniqKey, deadline, createdOn } = store.getTaskByKey();
  const [desc, setDesc] = useState(description);

  useEffect(addBorderHome(), []);

  const sendDeadline = () => {
    const day = $('#dayNum').val();
    const mounth = $('#mounthsNum').val();
    const year = $('#years').val();
    if ((year >= currentYear)
      && (mounth > 0)
      && (day > 0)) {
      const deadlineSet = `${day}/${mounth}/${year}`;
      store.replaceTaskDeadline(uniqKey, deadlineSet);
    }
  };

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
        <NavList />
        <div className="col-7 d-flex flex-column justify-content-evenly">
          <Description
            desc={ desc }
            sendDescription={ () => (
              desc && store.replaceTaskDescription(uniqKey, desc)) }
            getDescription={ setDesc }
          />
          <Deadline sendDeadline={ sendDeadline } />
        </div>
      </div>
    </main>);
}
