import React, { Component } from 'react';
import $ from 'jquery';
import * as store from '../helpers/store';

export default class ListManagement extends Component {
  clearList = () => {
    $('ol li').each((i, e) => e.remove());
    store.refreshTasks([]);
    window.location.reload(false);
  }

  render() {
    return (
      <div className="row order-3 d-flex">
        <button
          type="button"
          onClick={ this.clearList }
          className="col-6 btn-n-danger"
        >
          Limpar lista
        </button>
        <button
          className="col-6 btn-n-info"
          type="button"
        >
          Exibir Detalhes
        </button>
      </div>
    );
  }
}
