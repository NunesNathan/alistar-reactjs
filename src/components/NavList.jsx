import React from 'react';
import { useHistory } from 'react-router-dom';
import PropType from 'prop-types';
import NavItem from './NavItem';
import * as store from '../helpers/store';

export default function NavList({ reRender }) {
  const allTasks = store.getTasks();
  const { push } = useHistory();

  return (
    <nav className="nav nav-pills col-2 offset-2 flex-column">
      <button className="nav-link" type="button" onClick={ () => push('/') }>
        Go home
      </button>
      {allTasks
          && allTasks.map(({ uniqKey, ...task }) => (
            <NavItem
              key={ uniqKey }
              link={ `/task_details/${uniqKey}` }
              { ...task }
              reRender={ reRender }
              history={ push }
            />
          ))}
    </nav>
  );
}

NavList.propTypes = {
  reRender: PropType.func.isRequired,
};
