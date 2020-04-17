import React, { memo, useState, useCallback } from "react";

import imgStyles from "./styles/image.module.scss";
import Preloader from "./Preloader";

const ProgressiveImage = ({ imgSrc }) => {
  const [imageLoaded, setImageLoading] = useState("");

  // Our events handlers
  // Here we use "[]" to fire useCallback only once (aka onMount)
  const handleLoad = useCallback(() => setImageLoading(true), []);
  const handleError = useCallback(() => setImageLoading(false), []);

  // This my personal trick to prevent image from appear
  const showImage = !imageLoaded ? { display: "none" } : {};

  const ImageToRender = (
    <img
      alt=""
      src={imgSrc}
      className={imgStyles.progressiveImage}
      onLoad={handleLoad}
      onError={handleError}
      style={showImage}
    />
  );

  if (!imageLoaded) {
    // We use preloader along with image to allow image
    // load its resource while spinner is on screen.
    // Otherwise the image will never be loaded, because it
    // was never shown in fact. Keep it in mind while using Hooks.
    return <Preloader>{ImageToRender}</Preloader>;
  }

  return ImageToRender;
};

export default memo(ProgressiveImage);

                                                                                      