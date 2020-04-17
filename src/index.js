import React from "react";
import ReactDOM from "react-dom";

import ProgressiveImage from "./ProgressiveImage";

import { IMAGE_SRC } from "./constants";
import "./styles/index.module.scss";

ReactDOM.render(
  <ProgressiveImage imgSrc={IMAGE_SRC} />,
  document.getElementById("root")
);

                                                                                      