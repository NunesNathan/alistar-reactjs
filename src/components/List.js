import React, { Component } from 'react';
import ItemList from './ItemList';
import * as store from '../helpers/store'
import $ from 'jquery';

export default class List extends Component {
  excludeButton = ({ target }) => {
    target.parentNode.remove()
    store.refreshTasks($('li').index(target.parentNode))
  }
  render() {
    const { items } = this.props;
    return (
      <ol>
        {items
          && items.map((eachItem) => <ItemList item={ eachItem } excludeButton={ this.excludeButton } />) }
      </ol>
    );
  }
}
