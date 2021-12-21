import React, { Component } from 'react';
import PropType from 'prop-types';
import ControlKeys from './ControlKeys';

export default class ItemList extends Component {
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
        <hr className="border-bottom-toHr" />
      </li>
    );
  }
}

ItemList.propTypes = {
  item: PropType.string.isRequired,
  callback: PropType.func.isRequired,
};
