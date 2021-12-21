import React, { Component } from 'react';
import PropType from 'prop-types';
import $ from 'jquery';
import * as store from '../helpers/store';

export default class ListManagement extends Component {
  clearList = () => {
    $('ol li').each((i, e) => e.remove());
    store.refreshTasks([]);
    window.location.reload(false);
  }

  render() {
    const { toggleDesc, enableDescs } = this.props;
    return (
      <div className="row order-3 d-flex">
        <button
          className="col-6 btn-n-danger"
          type="button"
          onClick={ this.clearList }
        >
          Limpar lista
        </button>
        <button
          className="col-6 btn-n-info"
          type="button"
          onClick={ toggleDesc }
        >
          {enableDescs
            ? 'Esconder Detalhes'
            : 'Exibir Detalhes' }
        </button>
      </div>
    );
  }
}

ListManagement.propTypes = {
  toggleDesc: PropType.func.isRequired,
  enableDescs: PropType.bool.isRequired,
};
