import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import NavItem from './NavItem';
import TaskContext from '../context/TasksContext';

export default function NavList() {
  const { tasks } = useContext(TaskContext);
  const { push } = useHistory();

  return (
    <div className="nav nav-pills col-2 row mx-4 flex-column">
      <button
        className="nav-link"
        type="button"
        onClick={ () => push('/') }
      >
        <i className="fas fa-home" />
      </button>
      {tasks
        && tasks.map(({ uniqKey, ...task }) => (
          <NavItem
            key={ uniqKey }
            link={ `/task_details/${uniqKey}` }
            { ...task }
          />
        ))}
    </div>
  );
}
