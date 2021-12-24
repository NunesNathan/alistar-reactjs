import React, { Component } from 'react';

export default class Contacts extends Component {
  render() {
    return (
      <ul className="nav justify-content-center border-bottom pb-1 mb-3">
        <li className="nav-item">
          <a
            className="nav-link px-2 text-muted"
            href="https://www.linkedin.com/in/nathannunes-/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link px-2 text-muted"
            href="https://github.com/NunesNathan"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link px-2 text-muted"
            href="https://nunesnathan.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            Portifólio online
          </a>
        </li>
      </ul>);
  }
}
