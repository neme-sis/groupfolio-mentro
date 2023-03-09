import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { ProfileContext } from "../Profile";

const ProfileDescription = () => {
  const { transition, userId, currentUser, prevUser, prevUserId } =
    useContext(ProfileContext);
  return (
    <div className="profile-description-wrapper">
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
        <p
          className={`profile-description ${
            !transition && "profile-description-passive"
          }`}
        >
          {transition ? currentUser.description : prevUser.description}
        </p>
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
        <p
          className={`profile-description ${
            transition && "profile-description-passive"
          }`}
        >
          {!transition ? currentUser.description : prevUser.description}
        </p>
      </CSSTransition>
    </div>
  );
};

export default ProfileDescription;
