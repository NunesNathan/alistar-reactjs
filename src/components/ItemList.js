import React, { Component } from 'react';

export default class ItemList extends Component {
  render() {
    const { item, excludeButton } = this.props;
    return (
      <li>
        <span>
        { item }
        </span>
        <button
          type="button"
          onClick={ (e) => excludeButton(e) }
        >{ ' X ' }
        
        </button>
      </li>
    );
  }
}
