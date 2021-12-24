import React, { Component } from 'react';
import PropType from 'prop-types';
import { buttonIsActive } from '../helpers/easier';

export default class NavItem extends Component {
  constructor(props) {
    super();

    const { link } = props;
    this.state = {
      ...props,
      classList: buttonIsActive(link),
    };
  }

  navigate = () => {
    const { history, reRender, link } = this.state;
    history(link);
    reRender();
  }

  render() {
    const { task, classList } = this.state;
    return (
      <button
        className={ classList }
        type="button"
        onClick={ this.navigate }
      >
        {task}
      </button>
    );
  }
}

NavItem.propTypes = {
  link: PropType.string.isRequired,
};
