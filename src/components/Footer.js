import React, { Component } from 'react';
import Contacts from './Contacts';

export default class Footer extends Component {
  render() {
    return (
      <footer className="d-flex flex-column mt-4 mb-2">
        <Contacts />
        <p className="text-center text-muted">
          {`Esse ano eu dei o maior passo na minha estrada profissional e
          tomei a decisão mais gratificante da minha vida, ambos com o mesmo nome: `}
          <a
            className="link-styled"
            href="https://www.betrybe.com/"
            target="_blank"
            rel="noreferrer"
          >
            Trybe!
          </a>
          <br />
        </p>
        <p className="text-center align-self-end post-text text-muted">
          Conteúdo compilado por Nathan Nunes, 2021.
        </p>
      </footer>
    );
  }
}
