import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import TaskContext from '../context/TasksContext';
import ClearListModal from './ClearListModal';
import { removeClasses } from '../helpers/event';

export default function ListManagement() {
  const { showDescription, setShowDescription } = useContext(TaskContext);
  const [clearConfirmation, setClearConfirmation] = useState(false);

  const showClearListModal = () => setClearConfirmation(!clearConfirmation);

  useEffect(removeClasses, []);

  return (
    <TaskContext.Provider
      value={ {
        showClearListModal,
        clearConfirmation,
      } }
    >
      <div className="row d-flex mt-2 mb-4">
        <button
          className="col-6 btn-n-info"
          type="button"
          onClick={ () => setShowDescription(!showDescription) }
        >
          {showDescription
            ? 'Esconder Detalhes'
            : 'Exibir Detalhes'}
        </button>
        <Button
          id="clearButton"
          className="col-6 btn-n-danger"
          type="button"
          onClick={ showClearListModal }
        >
          Limpar lista
        </Button>
        <ClearListModal />
      </div>
    </TaskContext.Provider>
  );
}
