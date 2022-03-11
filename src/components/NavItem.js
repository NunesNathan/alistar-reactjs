import React from 'react';
import PropType from 'prop-types';
import { useHistory } from 'react-router-dom';
import { buttonIsActive } from '../helpers/easier';

export default function NavItem({ link, task }) {
  const classList = buttonIsActive(link);
  const { push } = useHistory();

  return (
    <button
      className={ classList }
      type="button"
      onClick={ () => push(link) }
    >
      {task}
    </button>
  );
}

NavItem.propTypes = {
  link: PropType.string.isRequired,
  task: PropType.string.isRequired,
};
