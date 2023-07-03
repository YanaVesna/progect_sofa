import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={393}
    height={529}
    viewBox="0 0 393 529"
    backgroundColor="#696969"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="9" y="245" rx="0" ry="0" width="340" height="150" />
    <rect x="8" y="402" rx="11" ry="11" width="340" height="42" />
    <rect x="10" y="17" rx="20" ry="20" width="340" height="218" />
  </ContentLoader>
);

export default Skeleton;
