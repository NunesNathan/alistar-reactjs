import React, { Component } from 'react';
import PropType from 'prop-types';
import ControlKeys from './ControlKeys';

export default class ItemList extends Component {
  showDescription = () => {
    const { enableDescs, description } = this.props;
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
    const { item, callback } = this.props;
    return (
      <li
        className="
        row col-8 d-flex mx-auto justify-content-center
        mb-2 pt-1"
      >
        <span className="text-center col-4">
          { item }
        </span>
        <ControlKeys callback={ callback } />
        { this.showDescription() }
        <hr className="border-bottom-toHr" />
      </li>
    );
  }
}

ItemList.propTypes = {
  item: PropType.string.isRequired,
  callback: PropType.func.isRequired,
  enableDescs: PropType.bool.isRequired,
  description: PropType.string.isRequired,
};
