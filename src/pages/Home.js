import React, { useState } from 'react';
import ListManagement from '../components/ListManagement';
import TaskList from '../components/TaskList';
import { createKey, newDate } from '../helpers/easier';
import * as store from '../helpers/store';

const STRING_TYPE = '';

export default function home() {
  const [taskText, setTaskText] = useState(STRING_TYPE);
  const [tasks] = useState(store.getTasks());
  const [showDescription, setShowDescription] = useState(false);

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
          value={ taskText }
          onChange={ ({ target: { value } }) => setTaskText(value) }
          id="taskInput"
          name="taskInput"
        />
        <button
          className="btn-n-outline-success col-3"
          type="button"
          onClick={ () => (
            taskText
              && (store.sendTasks({
                task: taskText,
                uniqKey: createKey(taskText),
                desc: STRING_TYPE,
                createdOn: newDate(),
                deadline: STRING_TYPE,
              }))
            && setTaskText(STRING_TYPE)
          ) }
        >
          Listar!
        </button>
      </label>
      <ListManagement
        showDescription={ showDescription }
        switchDescription={ setShowDescription }
      />
      {tasks
        && <TaskList
          tasks={ tasks }
          showDescription={ showDescription }
        />}
    </main>
  );
}
