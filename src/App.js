import React, { useState } from "react";
import "./App.css";
import HighlightedProfile from "./components/HighlightedProfile";
import Profile from "./components/Profile";
import ProfileHeader from "./components/ProfileHeader";

const App = () => {
  const [currentUser, setCurrentUser] = useState(1);
  const [prevUser, setPrevUser] = useState(5)
  return (
    <div className="App">
      <HighlightedProfile userId={currentUser} />
      <div className="container">
        <div className="container-left">
          <Profile userId={currentUser} prevUserId={prevUser}/>
        </div>
        <div className="container-right">
          <ProfileHeader
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            prevUser={prevUser}
            setPrevUser={setPrevUser}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
