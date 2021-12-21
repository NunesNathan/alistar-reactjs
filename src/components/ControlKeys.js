import React, { Component } from 'react';
import $ from 'jquery';
import PropType from 'prop-types';
import * as store from '../helpers/store';

export default class ControlKeys extends Component {
  excludeButton = ({ target }) => {
    store.deleteTask($('ol li').index(target.parentNode));
    target.parentNode.remove();
  }

  moveButton = ({ target }) => {
    const { callback } = this.props;

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
    callback();
  }

  render() {
    return (
      <>
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
      </>
    );
  }
}

ControlKeys.propTypes = {
  callback: PropType.func.isRequired,
};
