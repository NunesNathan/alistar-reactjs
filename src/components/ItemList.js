import React, { Component } from 'react';
import PropType from 'prop-types';
import ControlKeys from './ControlKeys';

export default class ItemList extends Component {
  showDescription = () => {
    const { enableDescs, desc: description } = this.props;
    if (enableDescs) {
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
    const { task, callback, uniqKey } = this.props;
    return (
      <li
        className="
        row col-8 d-flex mx-auto justify-content-center
        mb-2 pt-1"
      >
        <span className="text-center col-4">
          { task }
        </span>
        <ControlKeys callback={ callback } uniqKey={ uniqKey } />
        { this.showDescription() }
        <hr className="border-bottom-toHr" />
      </li>
    );
  }
}

ItemList.propTypes = {
  task: PropType.string.isRequired,
  uniqKey: PropType.string.isRequired,
  callback: PropType.func.isRequired,
  enableDescs: PropType.bool.isRequired,
  desc: PropType.string.isRequired,
};
