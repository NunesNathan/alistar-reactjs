import React, { Component } from 'react';
import PropType from 'prop-types';
import ControlKeys from './ControlKeys';

export default class TaskItem extends Component {
  toggleDescription = () => {
    const { showDescription, desc: description, createdOn,
      deadline } = this.props;
    const details = [`Criado em: ${createdOn}`, description, `Prazo: ${deadline}`];
    if (!description) {
      details[1] = 'Você ainda não definiu uma descrição!';
    }
    if (!deadline) {
      details.pop();
    }
    return (showDescription)
      ? (details.map((detail, index) => (
        <p key={ index } className="text-center">
          {detail}
        </p>)))
      : null;
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
        <div className="mt-4 px-0 row">
          { this.toggleDescription() }
        </div>
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
  createdOn: PropType.string.isRequired,
  deadline: PropType.string.isRequired,
};
