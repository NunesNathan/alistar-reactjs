import React, { Component } from 'react';
import PropType from 'prop-types';
import TaskItem from './TaskItem';

export default class TaskList extends Component {
  render() {
    const { tasks, reRender, showDescription } = this.props;
    return (
      <ol
        className=" container
        justify-content-center mb-5"
      >
        {tasks
          && tasks.map((eachTask) => (
            <TaskItem
              { ...eachTask }
              key={ eachTask.uniqKey }
              reRender={ reRender }
              showDescription={ showDescription }
            />))}
      </ol>
    );
  }
}

TaskList.propTypes = {
  tasks: PropType.arrayOf(PropType.object).isRequired,
  reRender: PropType.func.isRequired,
  showDescription: PropType.bool.isRequired,
};
