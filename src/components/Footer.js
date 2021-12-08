import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <section>
          <ul>
            <h3 id="contacts">Contatos:</h3>
            <li>
              <a
                className="linksThemes"
                href="https://www.linkedin.com/in/nathannunes-/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>

            </li>
            <li>
              <a
                className="linksThemes"
                href="https://github.com/NunesNathan"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

            </li>
          </ul>
        </section>
        <section>
          <aside className="footerText">
            <p>
              Esse ano eu dei o maior passo na minha estrada profissional e
              tomei a decisão mais gratificante da minha vida, ambos com o mesmo nome:
              {' '}
              <a
                href="https://www.betrybe.com/"
                target="_blank"
                rel="noreferrer"
              >
                Trybe!
              </a>
              <br />
              &quot;Conteúdo compilado por Nathan Nunes, 2021.&quot;
            </p>
          </aside>
        </section>
      </footer>
    );
  }
}
