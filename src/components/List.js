import React, { Component } from 'react';
import ItemList from './ItemList';

export default class List extends Component {
  render() {
    const { items } = this.props;
    return (
      <ol>
        {items
          && items.map((eachItem) => <ItemList item={ eachItem } />) }
      </ol>
    );
  }
}
