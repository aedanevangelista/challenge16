import React from "react";

import girl from "../assets/images/hero-desktop.jpg";

const RightAside = () => {
  return (
    <div className="z-10 overflow-hidden relative lg:w-[40%] lg:min-h-screen ">
      <img
        src={girl}
        alt="girl"
        className="z-20 lg:absolute object-cover lg:h-full lg:w-full"
      />
    </div>
  );
};

export default RightAside;
