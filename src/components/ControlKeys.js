import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropType from 'prop-types';
import $ from 'jquery';
import TaskContext from '../context/TasksContext';
import { getPathLink } from '../helpers/easier';
import * as store from '../helpers/store';

export default function ControlKeys({ uniqKey }) {
  const [link] = useState(getPathLink(uniqKey));

  const { refreshTasks } = useContext(TaskContext);

  const { push } = useHistory();

  const excludeButton = ({ target: { parentNode } }) => {
    const index = $('ol li').index(parentNode);
    store.deleteTask(index);
    refreshTasks();
  };

  const moveButton = ({ target }) => {
    // Pensei outras maneiras de pegar o texto do span, mas quis forçar o jQuery
    // I had another ways to get span text, but I prefer force jQuery

    const [previous, next, current] = [
      $('ol li').find(target).parent().prev()
        .index(),
      $('ol li').find(target).parent().next()
        .index(),
      $('ol li').find(target).parent().index()];

    if (target.name === 'up') {
      store.changeTasksIndex(current, previous);
    } else if (target.name === 'down') {
      store.changeTasksIndex(current, next);
    }

    refreshTasks();
  };

  return (
    <>
      <button
        className="btn-n-info mx-0 col-1"
        type="button"
        name="infos"
        onClick={ () => push(link) }
      >
        <i className="fas fa-pencil-alt" />
      </button>
      <button
        className="btn-grey-7 mx-1 col-1"
        type="button"
        name="up"
        onClick={ moveButton }
      >
        <i className="fas fa-arrow-up" />
      </button>
      <button
        className="btn-grey-7 mx-1 col-1"
        type="button"
        name="down"
        onClick={ moveButton }
      >
        <i className="fas fa-arrow-down" />
      </button>
      <button
        className="btn-n-danger mx-1 col-1"
        type="button"
        onClick={ excludeButton }
      >
        <i className="fas fa-trash-alt" />
      </button>
    </>
  );
}

ControlKeys.propTypes = {
  uniqKey: PropType.string.isRequired,
};
