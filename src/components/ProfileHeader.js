import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { images, users } from "../data/users";
import "../styles/ProfileHeader.css";

const ProfileHeader = ({
  currentUser,
  setCurrentUser,
  prevUser,
  setPrevUser,
}) => {
  const [transition, setTransition] = useState(false);
  useEffect(() => {
    setTransition(!transition);
  }, [currentUser]);
  return (
    <div className="profile-handler">
      <div className="profile-header-wrapper">
        <div
          className={`user-handler ${
            currentUser % 2 === 0 && "user-handler-deep"
          }`}
        >
          <i
            onClick={() => {
              setPrevUser(currentUser);
              if (currentUser === 1) setCurrentUser(5);
              else setCurrentUser(currentUser - 1);
            }}
          >
            ↓
          </i>
        </div>
        <div className="profile-icon-wrapper">
          <CSSTransition
            in={transition}
            timeout={500}
            classNames={`${
              (prevUser % 5) + 1 === currentUser
                ? `profile-icon-right`
                : `profile-icon`
            }`}
            unmountOnExit
          >
            <img
              src={images[(transition ? currentUser : prevUser) - 1].image}
              alt=""
              className={`profile-icon-active ${
                !transition && "profile-icon-passive"
              }`}
              loading={"lazy"}
            />
          </CSSTransition>
          <CSSTransition
            in={!transition}
            timeout={500}
            classNames={`${
              (prevUser % 5) + 1 === currentUser
                ? `profile-icon-right`
                : `profile-icon`
            }`}
            unmountOnExit
          >
            <img
              src={images[(!transition ? currentUser : prevUser) - 1].image}
              alt=""
              className={`profile-icon-active ${
                transition && "profile-icon-passive"
              }`}
              loading={"lazy"}
            />
          </CSSTransition>
        </div>
        <div
          className={`user-handler ${
            currentUser % 2 === 0 && "user-handler-deep"
          }`}
        >
          <i
            onClick={() => {
              setPrevUser(currentUser);
              if (currentUser === 5) setCurrentUser(1);
              else setCurrentUser(currentUser + 1);
            }}
          >
            ↓
          </i>
        </div>
      </div>
      <div className="person-names">
        <div
          style={{
            left: `calc(${-(currentUser - 1)} * (300px + 2rem))`,
            transition: `left ${
              (prevUser === 5 && currentUser === 1) ||
              (prevUser === 1 && currentUser === 5)
                ? "0ms"
                : "500ms"
            }`,
          }}
        >
          {users.map((user, i) => (
            <h2 key={i}>{user.name}</h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
