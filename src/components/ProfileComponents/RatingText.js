import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { ProfileContext } from "../Profile";

const RatingText = () => {
  const { transition, userId, currentUser, prevUser, prevUserId } =
    useContext(ProfileContext);
  return (
    <div className="rating-num">
      <CSSTransition
        in={transition}
        timeout={500}
        classNames={`${
          (prevUserId % 5) + 1 === userId
            ? `rating-number-right`
            : `rating-number`
        }`}
        unmountOnExit
      >
        <h1
          className={`rating ${userId % 2 === 0 && "rating-deep"} ${
            !transition && "rating-passive"
          }`}
        >
          {transition ? currentUser.rating : prevUser.rating}
        </h1>
      </CSSTransition>
      <CSSTransition
        in={!transition}
        timeout={500}
        classNames={`${
          (prevUserId % 5) + 1 === userId
            ? `rating-number-right`
            : `rating-number`
        }`}
        unmountOnExit
      >
        <h1
          className={`rating ${userId % 2 === 0 && "rating-deep"} ${
            transition && "rating-passive"
          }`}
        >
          {!transition ? currentUser.rating : prevUser.rating}
        </h1>
      </CSSTransition>
    </div>
  );
};

export default RatingText;
