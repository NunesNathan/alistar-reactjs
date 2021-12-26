import React, { Component } from 'react';
import PropType from 'prop-types';
import $ from 'jquery';
import * as store from '../helpers/store';

export default class ListManagement extends Component {
  clearList = () => {
    const { reRender } = this.props;
    $('ol li').each((i, e) => e.remove());
    store.deleteTask('all');
    reRender();
  }

  render() {
    const { switchDescription, showDescription } = this.props;
    return (
      <div className="row d-flex mt-2 mb-4">
        <button
          className="col-6 btn-n-info"
          type="button"
          onClick={ switchDescription }
        >
          {showDescription
            ? 'Esconder Detalhes'
            : 'Exibir Detalhes' }
        </button>
        <button
          className="col-6 btn-n-danger"
          type="button"
          onClick={ this.clearList }
        >
          Limpar lista
        </button>
      </div>
    );
  }
}

ListManagement.propTypes = {
  switchDescription: PropType.func.isRequired,
  showDescription: PropType.bool.isRequired,
  reRender: PropType.func.isRequired,
};
