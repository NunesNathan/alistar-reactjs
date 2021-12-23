import React from 'react';
import PropType from 'prop-types';
import NavList from './NavList';
import withHistory from './withHistory';
import * as store from '../helpers/store';

export default function BackToHome({ callback }) {
  const allTasks = store.getTasks();
  const { history } = withHistory();
  return (
    <nav className="col-2 offset-2" aria-label="breadcrumb">
      <ol className="breadcrumb flex-column">
        <button type="button" onClick={ () => history.push('/') }>
          Go home
        </button>
        {allTasks
          && allTasks.map((task) => (
            <NavList
              key={ task.uniqKey }
              { ...task }
              callback={ callback }
              history={ history.push }
            />
          ))}
      </ol>
    </nav>
  );
}

BackToHome.propTypes = {
  callback: PropType.func.isRequired,
};
