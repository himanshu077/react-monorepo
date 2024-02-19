import React from "react";
import AvatarWebp from "../../assets/images/avatar.webp";
import AvatarPNG from "../../assets/images/avatar.png";

const Assets = () => {
  return (
    <>
      {/* Webp */}
      <img src={AvatarWebp} alt="avatar" style={{ height: 100, width: 100 }} />
      {/* Png */}
      <img src={AvatarPNG} alt="avatar" style={{ height: 100, width: 100 }} />
    </>
  );
};

export default Assets;
