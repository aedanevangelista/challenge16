import React from "react";

import girl from "../assets/images/hero-desktop.jpg";

const RightAside = () => {
  return (
    <div className="z-10 overflow-hidden relative h-[770px] w-[40%]">
      <img
        src={girl}
        alt="girl"
        className="z-20 absolute object-cover h-full w-full"
      />
    </div>
  );
};

export default RightAside;
