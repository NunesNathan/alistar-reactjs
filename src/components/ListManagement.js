import React, { Component } from 'react';
import $ from 'jquery';
import * as store from '../helpers/store';

export default class ListManagement extends Component {
  clearList = () => {
    $('ol li').remove();
    store.refreshTasks([]);
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.clearList }
        >
          Limpar lista
        </button>
        <button
          type="button"
        >
          Exibir Detalhes
        </button>
      </div>
    );
  }
}
