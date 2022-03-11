import React from 'react';
import PropType from 'prop-types';
import InputDate from './InputDate';

export default function Deadline({ sendDeadline }) {
  return (
    <div className="my-2 d-flex justify-content-center">
      <p className="mx-1 pp mt-3 align-self-center">
        Terminar tarefa até:
      </p>
      <InputDate />
      <button
        className="mx-1 align-self-center btn-n-outline-success"
        type="button"
        onClick={ sendDeadline }
      >
        <i className="fas fa-location-arrow" />
      </button>
    </div>
  );
}

Deadline.propTypes = {
  sendDeadline: PropType.func.isRequired,
};
