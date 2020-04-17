import React, { memo } from "react";

import prlStyles from "./styles/preloader.module.scss";

const Preloader = ({ children }) => {
  // this is a basic CSS-based preloader just for demonstration
  const spinner = (
    <div className={prlStyles.preloader}>
      {Array.from(Array(11).keys()).map(key => (
        <div key={key} />
      ))}
    </div>
  );

  return (
    <div className={prlStyles.preloaderWrap}>
      {children}
      {spinner}
    </div>
  );
};

export default memo(Preloader);

                                                                                      