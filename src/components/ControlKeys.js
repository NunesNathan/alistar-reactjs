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

    store.refreshTasks([]);
    $('li > span').each((i, e) => store.sendTasks({ task: $(e).html() }));
  }

  render() {
    return (
      <>
        <button
          className="btn-n-info mx-1 col-1"
          type="button"
          name="infos"
          onClick={ this.moveButton }
        >
          <i className="far fa-window-maximize" />
        </button>
        <button
          className="btn-grey-7 mx-1 col-1"
          type="button"
          name="up"
          onClick={ this.moveButton }
        >
          <i className="fas fa-arrow-up" />
        </button>
        <button
          className="btn-grey-7 mx-1 col-1"
          type="button"
          name="down"
          onClick={ this.moveButton }
        >
          <i className="fas fa-arrow-down" />
        </button>
        <button
          className="btn-n-danger mx-1 col-1"
          type="button"
          onClick={ this.excludeButton }
        >
          <i className="fas fa-trash-alt" />
        </button>
      </>
    );
  }
}
