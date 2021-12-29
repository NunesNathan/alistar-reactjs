import React, { Component } from 'react';
import PropType from 'prop-types';
import { Button } from 'react-bootstrap';
import { removeClasses } from '../helpers/event';
import ClearListModal from './ClearListModal';

export default class ListManagement extends Component {
  constructor() {
    super();

    this.state = { toClear: false };
  }

  componentDidMount() {
    removeClasses();
  }

  showClearListModal = () => {
    const { toClear } = this.state;

    this.setState({
      toClear: !toClear,
    });
  }

  render() {
    const { switchDescription, showDescription, reRender } = this.props;
    const { toClear } = this.state;
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
        <Button
          id="clearButton"
          className="col-6 btn-n-danger"
          type="button"
          onClick={ this.showClearListModal }
        >
          Limpar lista
        </Button>
        <ClearListModal
          reRender={ reRender }
          showClearListModal={ this.showClearListModal }
          toClear={ toClear }
        />
      </div>
    );
  }
}

ListManagement.propTypes = {
  switchDescription: PropType.func.isRequired,
  showDescription: PropType.bool.isRequired,
  reRender: PropType.func.isRequired,
};
