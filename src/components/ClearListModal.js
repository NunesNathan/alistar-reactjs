import React, { useContext } from 'react';
import $ from 'jquery';
import { Modal } from 'react-bootstrap';
import * as store from '../helpers/store';
import TaskContext from '../context/TasksContext';

export default function ClearListModal() {
  const { showClearListModal, clearConfirmation } = useContext(TaskContext);

  const clearList = () => {
    $('ol li').each((i, e) => e.remove());
    store.deleteTask('all');
  };

  return (
    <Modal
      centered
      show={ clearConfirmation }
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
          onClick={ clearList }
        >
          Sim!
        </button>
      </Modal.Footer>
    </Modal>
  );
}
