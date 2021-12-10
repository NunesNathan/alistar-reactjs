import React, { Component } from 'react';
import $ from 'jquery';
import * as store from '../helpers/store';

export default class ControlKeys extends Component {
  excludeButton = ({ target }) => {
    store.deleteTask($('li').index(target.parentNode));
    target.parentNode.remove();
  }

  moveButton = ({ target }) => {
    const previous = $(target).parent().prev().find('span');
    const next = $(target).parent().next().find('span');
    const current = $(target).parent().find('span');
    if (target.name === 'up') {
      const [previousResult, currentResult] = [$(current).html(), $(previous).html()];
      $(previous).text(previousResult);
      $(current).text(currentResult);
    }
    if (target.name === 'down') {
      const [nextResult, currentResult] = [$(current).html(), $(next).html()];
      $(next).text(nextResult);
      $(current).text(currentResult);
    }

    const arr = [];
    $('li > span').each((i, e) => arr.push($(e).html()));
    store.refreshTasks(arr);
  }

  render() {
    return (
      <>
        <button
          type="button"
          name="up"
          onClick={ this.moveButton }
        >
          {' ↑ '}
        </button>
        <button
          type="button"
          name="down"
          onClick={ this.moveButton }
        >
          {' ↓ '}
        </button>
        <button
          type="button"
          onClick={ this.excludeButton }
        >
          {' X '}
        </button>
      </>
    );
  }
}
