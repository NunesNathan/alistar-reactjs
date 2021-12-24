import React, { Component } from 'react';
import PropType from 'prop-types';
import ControlKeys from './ControlKeys';

export default class TaskItem extends Component {
  toggleDescription = () => {
    const { showDescription, desc: description } = this.props;
    if (showDescription) {
      if (description) {
        return (
          <p className="text-center">
            {description}
          </p>);
      }
      return (<p className="text-center">Você ainda não definiu uma descrição!</p>);
    }
  }

  render() {
    const { task, reRender, uniqKey } = this.props;
    return (
      <li
        className=" row col-8 d-flex
        mx-auto justify-content-center
        mb-2 pt-1"
      >
        <span className="text-center col-4">
          { task }
        </span>
        <ControlKeys reRender={ reRender } uniqKey={ uniqKey } />
        { this.toggleDescription() }
        <hr className="border-bottom-toHr" />
      </li>
    );
  }
}

TaskItem.propTypes = {
  task: PropType.string.isRequired,
  uniqKey: PropType.string.isRequired,
  reRender: PropType.func.isRequired,
  showDescription: PropType.bool.isRequired,
  desc: PropType.string.isRequired,
};
