import React, { Component } from 'react';
import PropType from 'prop-types';
import ControlKeys from './ControlKeys';

export default class ItemList extends Component {
  render() {
    const { item } = this.props;
    return (
      <li
        className="itemList"
      >
        <span>
          { item }
        </span>
        <ControlKeys />
      </li>
    );
  }
}

ItemList.propTypes = {
  item: PropType.string.isRequired,
};
