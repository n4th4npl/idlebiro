import React from "react";

const Title = ({ pieceName, index, setRotation, setIndex }) => {
  return (
    <div
      className="title-item"
      onMouseEnter={() => setRotation(index)}
      onMouseLeave={() => setIndex(-1)}
    >
      <h1>{pieceName}</h1>
    </div>
  );
};

export default Title;
