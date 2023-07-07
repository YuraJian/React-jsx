import React, { createRef, useEffect } from "react";
import "../styles/SquareComponent.css";

const Square = () => {
  const squareRef = createRef();

  useEffect(() => {
    squareRef.current.style.position = "relative";
    squareRef.current.style.left = "200px";
  });

  return (
    <div>
      <div ref={squareRef} className="square"></div>
    </div>
  );
};

export default Square;
