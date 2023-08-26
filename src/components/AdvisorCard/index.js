import React from "react";
import "./index.css";

const AdvisorCard = ({ name, role, university, id }) => {
  return (
    <div className="box">
      <div className="content">
        <img src={`/advisor${id}.jpeg`} alt={`image1`} />
        <strong>{name}</strong>
        <p className="role">{role}</p>
        <p className="college">{university}</p>
        <button className="button">Message him now</button>
      </div>
    </div>
  );
};

export default AdvisorCard;
