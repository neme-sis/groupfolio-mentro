import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { ProfileContext } from "../Profile";

const ProfileName = () => {
  const { transition, userId, currentUser, prevUser, prevUserId } =
    useContext(ProfileContext);
  return (
    <div className="profile-name-wrapper">
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
        <h2 className={`profile-name ${!transition && "profile-name-passive"}`}>
          {transition ? currentUser.name : prevUser.name}
        </h2>
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
        <h2 className={`profile-name ${transition && "profile-name-passive"}`}>
          {!transition ? currentUser.name : prevUser.name}
        </h2>
      </CSSTransition>
    </div>
  );
};

export default ProfileName;
