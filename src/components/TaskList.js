import React, { useContext } from 'react';
import TaskContext from '../context/TasksContext';
import TaskItem from './TaskItem';

export default function TaskList() {
  const { tasks } = useContext(TaskContext);

  return (
    <ol
      className=" container
        justify-content-center mb-5"
    >
      {
        tasks.map((eachTask) => (
          <TaskItem
            { ...eachTask }
            key={ eachTask.uniqKey }
          />))
      }
    </ol>
  );
}
