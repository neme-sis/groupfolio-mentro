import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { ProfileContext } from "../Profile";

const RatingStars = () => {
  const { transition, userId, currentUser, prevUser, prevUserId } =
    useContext(ProfileContext);
  return (
    <div className="ratings-stars-wrapper">
      <CSSTransition
        in={transition}
        timeout={500}
        classNames={`${
          (prevUserId % 5) + 1 === userId
            ? "rating-stars-animation"
            : "rating-stars-animation-reverse"
        }`}
        unmountOnExit
      >
        <i
          className={`rating-stars ${userId % 2 === 0 && "rating-stars-deep"} ${
            !transition && "rating-stars-passive"
          }`}
          style={{
            "--rating":
              Math.floor(
                Number(transition ? currentUser.rating : prevUser.rating) / 0.5
              ) * 0.5,
          }}
        ></i>
      </CSSTransition>
      <CSSTransition
        in={!transition}
        timeout={500}
        classNames={`${
          (prevUserId % 5) + 1 === userId
            ? "rating-stars-animation"
            : "rating-stars-animation-reverse"
        }`}
        unmountOnExit
      >
        <i
          className={`rating-stars ${userId % 2 === 0 && "rating-stars-deep"} ${
            transition && "rating-stars-passive"
          }`}
          style={{
            "--rating":
              Math.floor(
                Number(!transition ? currentUser.rating : prevUser.rating) / 0.5
              ) * 0.5,
          }}
        ></i>
      </CSSTransition>
    </div>
  );
};

export default RatingStars;
