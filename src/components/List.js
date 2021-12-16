import React, { Component } from 'react';
import PropType from 'prop-types';
import ItemList from './ItemList';

export default class List extends Component {
  render() {
    const { items } = this.props;
    return (
      <ol>
        <h3>Afazeres:</h3>
        {items
          && items.map((eachItem) => (
            <ItemList
              key={ eachItem.task }
              item={ eachItem.task }
            />
          ))}
      </ol>
    );
  }
}

List.propTypes = {
  items: PropType.arrayOf(PropType.object).isRequired,
};
