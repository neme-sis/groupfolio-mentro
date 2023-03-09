import React, { useEffect, useState } from "react";
import { users } from "../data/users";
import "../styles/Profile.css";
import "../styles/ProfileAnimations.css";
import BookSessionButton from "./ProfileComponents/BookSessionButton";
import ProfileDescription from "./ProfileComponents/ProfileDescription";
import ProfileName from "./ProfileComponents/ProfileName";
import ProfileRole from "./ProfileComponents/ProfileRole";
import RatingStars from "./ProfileComponents/RatingStars";
import RatingText from "./ProfileComponents/RatingText";

export const ProfileContext = React.createContext({});

const Profile = ({ userId, prevUserId }) => {
  const [transition, setTransition] = useState(false);
  useEffect(() => {
    setTransition(!transition);
  }, [userId]);

  const currentUser = users[userId - 1];
  const prevUser = users[prevUserId - 1];

  const store = { transition, userId, currentUser, prevUser, prevUserId };

  return (
    <ProfileContext.Provider value={store}>
      <div className="profile">
        <RatingText />
        <RatingStars />
        <ProfileName />
        <ProfileRole />
        <ProfileDescription />

        <BookSessionButton />
      </div>
    </ProfileContext.Provider>
  );
};

export default Profile;
