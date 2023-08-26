/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import "./index.css";

const MentorsCard = ({ name, university, id }) => {
  return (
    <div className="box">
      <div className="content">
        <img src={`/profile${id}.jpeg`} alt={`image${id}`} />
        <strong>{name}</strong>
        <p className="">{university}</p>
      </div>
    </div>
  );
};

export default MentorsCard;
