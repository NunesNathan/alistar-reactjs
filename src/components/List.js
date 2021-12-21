import React, { Component } from 'react';
import PropType from 'prop-types';
import ItemList from './ItemList';

export default class List extends Component {
  render() {
    const { items, callback, enableDescs } = this.props;
    return (
      <ol
        className="
      container
      justify-content-center
      order-2
      col-12
      my-5"
      >
        <h4 className="text-center">Afazeres:</h4>
        {items
          && items.map((eachItem) => (
            <ItemList
              { ...eachItem }
              key={ eachItem.uniqKey }
              callback={ callback }
              enableDescs={ enableDescs }
            />
          ))}
      </ol>
    );
  }
}

List.propTypes = {
  items: PropType.arrayOf(PropType.object).isRequired,
  callback: PropType.func.isRequired,
  enableDescs: PropType.bool.isRequired,
};
