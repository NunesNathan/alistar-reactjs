import React from 'react';
import PropType from 'prop-types';

export default function Description({ desc, getDescription, sendDescription }) {
  return (
    <div className="my-2">
      <label
        className="d-flex
           justify-content-center label-desc"
        htmlFor="desc"
      >
        <p className="mt-2 align-self-center">
          Detalhes da tarefa:
        </p>
        <textarea
          id="desc"
          placeholder="descrição..."
          defaultValue={ desc }
          onChange={ ({ target: { value } }) => getDescription(value) }
          className="mx-1 form-control bg-grey-2"
        />
        <button
          onClick={ sendDescription }
          className="align-self-center btn-n-outline-success"
          type="button"
        >
          <i className="fas fa-location-arrow" />
        </button>
      </label>
    </div>
  );
}

Description.propTypes = {
  desc: PropType.string.isRequired,
  sendDescription: PropType.func.isRequired,
  getDescription: PropType.func.isRequired,
};
