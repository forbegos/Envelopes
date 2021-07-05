import React from "react";

export default function Envcard(props) {
  const cardStyle = {
    // justifyContent: "center",
    width: "400px",
    padding: "100px",
    border: "blue solid 3px",
  };
  return (
    <div>
      <div className="card">
        <div className="card-body" style={cardStyle}>
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.balance}</p>
        </div>
      </div>
    </div>
  );
}
