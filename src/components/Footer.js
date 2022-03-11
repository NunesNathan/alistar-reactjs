import React from 'react';
import Contacts from './Contacts';

export default function Footer() {
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
        {` 2021 > Feito por Nathan Nunes,
         com React, FontAwesome, uniqID, jQuery e 💚.`}
      </p>
    </footer>
  );
}
