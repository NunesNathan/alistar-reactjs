import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropType from 'prop-types';

export default function ControlKeys({ uniqKey }) {
  const [link] = useState(getPathLink(uniqKey));

  const history = useHistory();

  const excludeButton = ({ target: { parentNode } }) => {
    const index = $('ol li').index(parentNode);
    store.deleteTask(index);
    parentNode.remove();
  };

  const moveButton = ({ target }) => {
    // Pensei outras maneiras de pegar o texto do span, mas quis forçar o jQuery
    // I had another ways to get span text, but I prefer force jQuery
    // const previous = $('ol li').find(target).parent().prev()
    //   .index();
    // const next = $('ol li').find(target).parent().next()
    //   .index();
    // const current = $('ol li').find(target).parent().index();

    const [previous, next, current] = [
      $('ol li').find(target).parent().prev()
        .index(),
      $('ol li').find(target).parent().next()
        .index(),
      $('ol li').find(target).parent().index()];

    if (target.name === 'up') {
      store.changeTasksIndex(current, previous);
    }

    if (target.name === 'down') {
      store.changeTasksIndex(current, next);
    }
  };

  return (
    <>
      <button
        className="btn-n-info mx-0 col-1"
        type="button"
        name="infos"
        onClick={ () => history.push(link) }
      >
        <i className="fas fa-pencil-alt" />
      </button>
      <button
        className="fas fa-arrow-up btn-grey-7 mx-1 col-1"
        type="button"
        name="up"
        onClick={ moveButton }
      >
        { }
      </button>
      <button
        className="fas fa-arrow-down btn-grey-7 mx-1 col-1"
        type="button"
        name="down"
        onClick={ moveButton }
      >
        { }
      </button>
      <button
        className="fas fa-trash-alt btn-n-danger mx-1 col-1"
        type="button"
        onClick={ excludeButton }
      >
        { }
      </button>
    </>
  );
}

ControlKeys.propTypes = {
  uniqKey: PropType.string.isRequired,
};
