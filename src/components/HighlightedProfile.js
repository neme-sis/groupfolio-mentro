import React, { useEffect, useState } from "react";
import { images } from "../data/users";
import "../styles/HighlightedProfile.css";

const HighlightedProfile = ({ userId }) => {
  const [currentImages, setCurrentImages] = useState([]);
  useEffect(() => {
    let arr = [...images, images[0], ...images.slice(3)];
    if (userId === 5) {
      arr[6] = images[1];
    }
    setCurrentImages(arr);
  }, [userId]);
  return (
    <div
      className={`circle-background ${
        userId % 2 === 0 && "circle-background-deep"
      }`}
    >
      <div className={`image-rotator ${
        userId % 2 === 0 && "image-rotator-deep"
      }`}>
        <div className={`images images-rotation-${userId}`}>
          {currentImages.map((item, i) => (
            <img
              src={item.image}
              alt=""
              className={`profile-images profile-image-${
                i + 1
              } profile-${userId}`}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightedProfile;
