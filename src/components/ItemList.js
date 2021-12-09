import React, { Component } from 'react';
import ControlKeys from './ControlKeys';

export default class ItemList extends Component {
  render() {
    const { item } = this.props;
    return (
      <li>
        <span>
        { item }
        </span>
        <ControlKeys />
      </li>
    );
  }
}
