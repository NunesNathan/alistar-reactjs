import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="py-3 mt-4 mb-2">
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
        </ul>
        <p className="text-center text-muted">
          Esse ano eu dei o maior passo na minha estrada profissional e
          tomei a decisão mais gratificante da minha vida, ambos com o mesmo nome:
          {' '}
          <a
            className="link-styled"
            href="https://www.betrybe.com/"
            target="_blank"
            rel="noreferrer"
          >
            Trybe!
          </a>
          <br />
          &quot;Conteúdo compilado por Nathan Nunes, 2021.&quot;
        </p>
      </footer>
    );
  }
}
