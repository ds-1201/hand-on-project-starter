import React from "react";

const CardsList = () => {
  return (
    <ul className="cards">
      <li className="cards__item">
        <div className="card">
          <div className="card__image card__image--fence"></div>
          <div className="card__content">
            <div className="card__title">Flex</div>
            <p className="card__text">
              This is the shorthand for flex-grow, flex-shrink and flex-basis
              combined. The second and third parameters (flex-shrink and
              flex-basis) are optional. Default is 0 1 auto.{" "}
            </p>
            <button className="btn btn--block card__btn">Button</button>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default CardsList;
