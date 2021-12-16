import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex align-items-center justify-content-center">
            <p className="display-3">À listar</p>
          </div>
          <ul className="nav mb-md-0 justify-content-center">
            <li className="nav-link px-2">
              <a
                className="link-dark"
                href="https://www.linkedin.com/in/nathannunes-/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li className="nav-link px-2">
              <a
                className="link-dark"
                href="https://github.com/NunesNathan"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li className="nav-link px-2">
              <a
                className="link-dark"
                href="https://nunesnathan.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                Portifólio online
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
