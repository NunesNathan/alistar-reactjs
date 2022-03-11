import React from 'react';

export default function Contacts() {
  return (
    <ul className="nav justify-content-center border-bottom pb-1 mb-3">
      <li className="nav-item text-center px-0">
        <a
          className="nav-link p-1 text-muted"
          href="https://www.linkedin.com/in/nathannunes-/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </li>
      <li className="nav-item text-center p-1">
        <a
          className="nav-link p-1 text-muted"
          href="https://github.com/NunesNathan"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </li>
      <li className="nav-item text-center p-1">
        <a
          className="nav-link p-1 text-muted"
          href="https://nunesnathan.github.io/"
          target="_blank"
          rel="noreferrer"
        >
          Portifólio online
        </a>
      </li>
    </ul>);
}
