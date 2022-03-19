import React, { useState } from 'react';
import ListManagement from '../components/ListManagement';
import TaskList from '../components/TaskList';
import TaskContext from '../context/TasksContext';
import { createKey, newDate } from '../helpers/easier';
import * as store from '../helpers/store';

const STRING_TYPE = '';

export default function Home() {
  const [taskText, setTaskText] = useState(STRING_TYPE);
  const [tasks, setTasks] = useState(store.getTasks());
  const [showDescription, setShowDescription] = useState(false);

  const refreshTasks = () => {
    setTasks(store.getTasks());
  };

  const listIT = () => {
    if (taskText) {
      store.sendTasks({
        task: taskText,
        uniqKey: createKey(taskText),
        desc: STRING_TYPE,
        createdOn: newDate(),
        deadline: STRING_TYPE,
      });
      setTaskText(STRING_TYPE);
      refreshTasks();
    }
  };

  return (
    <TaskContext.Provider
      value={ {
        tasks,
        refreshTasks,
        showDescription,
        setShowDescription,
      } }
    >
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
            onClick={ listIT }
          >
            Listar!
          </button>
        </label>
        <ListManagement />
        {tasks
          && <TaskList />}
      </main>
    </TaskContext.Provider>
  );
}
