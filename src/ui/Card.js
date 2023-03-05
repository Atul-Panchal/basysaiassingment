import React from "react";
import "./Card.css";
const Card = (props) => {
  const { width, height, padding, margintop, className } = props;
  return (
    <div
      className={`card-wrapper ${className}`}
      style={{
        width: `${width}`,
        height: `${height}`,
        padding: `${padding}`,
        minHeight: `${height}`,
        marginTop: `${margintop}`,
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
