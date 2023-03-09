import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { ProfileContext } from "../Profile";

const ProfileRole = () => {
  const { transition, userId, currentUser, prevUser, prevUserId } =
    useContext(ProfileContext);
  return (
    <div className="profile-role-wrapper">
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
        <h2 className={`profile-role ${!transition && "profile-role-passive"}`}>
          {transition ? currentUser.companyRole : prevUser.companyRole}
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
        <h2 className={`profile-role ${transition && "profile-role-passive"}`}>
          {!transition ? currentUser.companyRole : prevUser.companyRole}
        </h2>
      </CSSTransition>
    </div>
  );
};

export default ProfileRole;
