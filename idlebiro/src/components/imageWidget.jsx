import React from "react";

const ImageWidget = ({ src, alt, pieceName, size, pieceStyle, collection }) => {
  return (
    <div style={{ position: "relative" }}>
      <div className="p-20 opacity-0 flex flex-col justify-between cursor-pointer hover:opacity-100 transition duration-500" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.7)", zIndex: 10 }}>
        <div>
        <h2 className="text-4xl font-bold text-white">{pieceName}</h2>
        <h3 className="text-2xl text-white">{collection}</h3>
        </div>
        <div>
        <p className="text-white">{pieceStyle}</p>
        <p className="text-white">{size}</p>
        </div>
      </div>
      <img
        className="relative z-1"
        src={src}
        alt={alt}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default ImageWidget;
