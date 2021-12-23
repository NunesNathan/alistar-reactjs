import React, { Component } from 'react';

export default class NavList extends Component {
  constructor(props) {
    super();

    this.state = { ...props };
  }

  navigate = () => {
    const { uniqKey, history, callback } = this.state;
    const link = `/task_details/${uniqKey}`;
    history(link);
    callback();
  }

  render() {
    const { task } = this.state;
    return (
      <button
        type="button"
        onClick={ this.navigate }
      >
        {task}
      </button>
    );
  }
}
