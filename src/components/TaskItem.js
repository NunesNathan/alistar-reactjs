import React from 'react';
import ControlKeys from './ControlKeys';

export default function tskintem(
  { task, uniqKey, desc: description, createdOn, deadline },
) {
  const { showDescription } = useContext(TaskContext);

  const toggleDescription = () => {
    const details = [`Criado em: ${createdOn}`, description, `Prazo: ${deadline}`];
    if (!description) {
      details[1] = 'Você ainda não definiu uma descrição!';
    }
    if (!deadline) {
      details.pop();
    }
    return (showDescription)
      ? (details.map((detail, index) => (
        <p key={ index } className="text-center">
          {detail}
        </p>)))
      : null;
  };

  return (
    <li
      className=" row col-8 d-flex
        mx-auto justify-content-center
        mb-2 pt-1"
    >
      <span className="text-center col-4">
        { task }
      </span>
      <ControlKeys uniqKey={ uniqKey } />
      <div className="mt-4 px-0 row">
        { toggleDescription()}
      </div>
      <hr className="border-bottom-toHr" />
    </li>
  );
}
