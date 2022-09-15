
import React from "react";
import HeaderLinks from "./HeaderLinks";

function CustomNavbar({ links }) {
  return (
    <>
      <HeaderLinks links={links} />
    </>
  );
}

export default React.memo(CustomNavbar);
