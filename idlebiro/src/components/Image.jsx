import React from "react";
import cn from "classnames";

const Image = ({ src, active, rotationPosition }) => {
  return (
    <img
      className={cn({ active })}
      src={src}
      style={{
        transform: active
          ? `scale(1.1) rotate(${rotationPosition}deg)`
          : `rotate(${rotationPosition}deg`,
      }}
    ></img>
  );
};

export default Image;
