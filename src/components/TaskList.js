import React from 'react';
import TaskItem from './TaskItem';

export default function tasts() {
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
