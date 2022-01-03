import React, { Component } from 'react';
import PropType from 'prop-types';

export default class Description extends Component {
  render() {
    const { desc, sendDescription, getDescription } = this.props;
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
            value={ desc }
            onChange={ getDescription }
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
}

Description.propTypes = {
  desc: PropType.string.isRequired,
  sendDescription: PropType.func.isRequired,
  getDescription: PropType.func.isRequired,
};
