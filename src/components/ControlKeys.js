import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropType from 'prop-types';
import $ from 'jquery';
import * as store from '../helpers/store';
import { getPathLink } from '../helpers/easier';

export default class ControlKeys extends Component {
  constructor(props) {
    super();

    const { uniqKey, ...proper } = props;
    this.state = {
      goTo: false,
      ...proper,
      link: getPathLink(uniqKey),
    };
  }

  excludeButton = ({ target: { parentNode } }) => {
    const { reRender } = this.state;
    const index = $('ol li').index(parentNode);
    store.deleteTask(index);
    reRender();
    parentNode.remove();
  }

  moveButton = ({ target }) => {
    const { reRender } = this.state;

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

    reRender();
  }

  redirectButton = () => {
    this.setState({
      goTo: true,
    });
  }

  render() {
    const { goTo, link } = this.state;
    return (
      <>
        <button
          className="far fa-window-maximize btn-n-info mx-0 col-1"
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
  uniqKey: PropType.string.isRequired,
};
