import React, { Component } from 'react';
import $ from 'jquery';
import PropType from 'prop-types';
import { Redirect } from 'react-router-dom';
import * as store from '../helpers/store';

export default class ControlKeys extends Component {
  constructor() {
    super();

    this.state = {
      goTo: false,
    };
  }

  excludeButton = ({ target: { parentNode } }) => {
    const { callback } = this.props;
    const index = $('ol li').index(parentNode);
    store.deleteTask(index);
    callback();
    parentNode.remove();
  }

  moveButton = ({ target }) => {
    const { callback } = this.props;

    // Pensei outras maneiras de pegar o texto do span, mas quis forçar o jQuery
    // I had another ways to get span text, but I prefer force jQuery
    const previous = $('ol li').find(target).parent().prev()
      .index() - 1;
    const next = $('ol li').find(target).parent().next()
      .index() - 1;
    const current = $('ol li').find(target).parent().index() - 1;

    if (target.name === 'up') {
      store.changeTasksIndex(current, previous);
    }

    if (target.name === 'down') {
      store.changeTasksIndex(current, next);
    }

    callback();
  }

  redirectButton = () => {
    this.setState({
      goTo: true,
    });
  }

  render() {
    const { goTo } = this.state;
    const { uniqKey } = this.props;
    const link = `/task_details/${uniqKey}`;
    return (
      <>
        <button
          className="far fa-window-maximize btn-n-info mx-1 col-1"
          type="button"
          name="infos"
          onClick={ this.redirectButton }
        >
          { }
        </button>
        <button
          className="fas fa-arrow-up btn-grey-7 mx-1 col-1"
          type="button"
          name="up"
          onClick={ this.moveButton }
        >
          { }
        </button>
        <button
          className="fas fa-arrow-down btn-grey-7 mx-1 col-1"
          type="button"
          name="down"
          onClick={ this.moveButton }
        >
          { }
        </button>
        <button
          className="fas fa-trash-alt btn-n-danger mx-1 col-1"
          type="button"
          onClick={ this.excludeButton }
        >
          { }
        </button>
        {goTo
          && <Redirect to={ link } />}
      </>
    );
  }
}

ControlKeys.propTypes = {
  callback: PropType.func.isRequired,
  uniqKey: PropType.string.isRequired,
};
