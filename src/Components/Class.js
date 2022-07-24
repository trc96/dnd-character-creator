import { useState, useEffect } from "react";
import axios from "axios";
import Classes from './Classes'

//styles
import "./Styles/Class.css";

const Class = (props) => {
  const jobMapped = Classes.filter((job) => {
    return job.name === props.details.name;
  }).map((details) => {
    return (
      <div key={Classes.id}>
        <h2 className="class-details">{details.description}</h2>
        <h2 className="detail-title">Hit Die:</h2>
        <h2 className="detail-description">{details.hitDie}</h2>
        <h2 className="detail-title">Primary Ability:</h2>
        <h2 className="detail-description">{details.primaryAbility}</h2>
        <h2 className="detail-title">Saves:</h2>
        <h2 className="detail-description">{details.saves}</h2>
      </div>
    );
  });

  return (
    <div className="main">
      <div className="class-select-container">
        <h1 className="class-name">{props.details.name}</h1>
        {jobMapped}
      </div>
    </div>
  );
};

export default Class;
