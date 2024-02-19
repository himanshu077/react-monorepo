import React from "react";

// Using url-loader to import svg as image
// import Download, { ReactComponent as DownloadIcon } from "./assets/icons/download.svg";

// Using asset module
import DownloadIcon from "../assets/icons/download.svg";
import Download from "../assets/icons/download.svg?url";

const Svgs = () => {
  return (
    <>
      {/* Use svg as react component: */}
      <DownloadIcon style={{ height: 40, width: 40, color: "green" }} />

      {/* Use svg as image */}
      <img
        src={Download}
        alt="download"
        style={{ height: 40, width: 40, color: "green" }}
      />
    </>
  );
};

export default Svgs;
