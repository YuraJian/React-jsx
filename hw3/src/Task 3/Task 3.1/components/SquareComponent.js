import React, { createRef, useEffect } from "react";
import "../styles/SquareComponent.css";

const Square = () => {
  const squareRef = createRef();

  useEffect(() => {
    squareRef.current.style.transform = "translateX(200px)";
    squareRef.current.style.transition = "2000ms";
  });

  return (
    <div>
      <div ref={squareRef} className="square"></div>
    </div>
  );
};

export default Square;
