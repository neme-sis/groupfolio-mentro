import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { ProfileContext } from "../Profile";

const BookSessionButton = () => {
  const { transition, userId, prevUserId } =
    useContext(ProfileContext);
  return (
    <button className={`session-booker`} onClick={(e) => e.preventDefault()}>
      <CSSTransition
        in={transition}
        timeout={500}
        classNames={`${
          (prevUserId % 5) + 1 === userId
            ? `session-booker-div-right`
            : `session-booker-div`
        }`}
        unmountOnExit
      >
        <div
          className={`session-button ${
            !transition && "session-button-passive"
          } ${userId % 2 === 0 && "session-deep"}`}
        ></div>
      </CSSTransition>
      <CSSTransition
        in={!transition}
        timeout={500}
        classNames={`${
          (prevUserId % 5) + 1 === userId
            ? `session-booker-div-right`
            : `session-booker-div`
        }`}
        unmountOnExit
      >
        <div
          className={`session-button ${
            transition && "session-button-passive"
          } ${userId % 2 === 0 && "session-deep"}`}
        ></div>
      </CSSTransition>
      <p>Book a session</p>
    </button>
  );
};

export default BookSessionButton;
