import React, { Component } from 'react';
import PropType from 'prop-types';
import $ from 'jquery';
import { Modal } from 'react-bootstrap';
import * as store from '../helpers/store';

export default class ClearListModal extends Component {
  clearList = () => {
    const { reRender } = this.props;
    $('ol li').each((i, e) => e.remove());
    store.deleteTask('all');
    reRender();
  }

  render() {
    const { toClear, showClearListModal } = this.props;
    return (
      <Modal
        centered
        show={ toClear }
        onHide={ showClearListModal }
      >
        <Modal.Header
          className="bg-grey-2 text-dark"
          closeButton
        >
          Você clicou em Limpar lista!
        </Modal.Header>
        <Modal.Body className="bg-grey-2 text-dark">
          Deseja mesmo limpar toda a sua lista de tarefas?
        </Modal.Body>
        <Modal.Footer className="bg-grey-2 text-dark">
          <button
            className="btn-n-info"
            type="button"
            onClick={ showClearListModal }
          >
            Cancelar!
          </button>
          <button
            className="btn-n-danger"
            type="button"
            onClick={ this.clearList }
          >
            Sim!
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ClearListModal.propTypes = {
  showClearListModal: PropType.func.isRequired,
  toClear: PropType.bool.isRequired,
  reRender: PropType.func.isRequired,
};
