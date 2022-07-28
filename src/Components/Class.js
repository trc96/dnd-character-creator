import { useState, useEffect } from "react";
import axios from "axios";
import Classes from "./Arrays/Classes";
import { connect } from "react-redux";
import { selectClass } from "../redux/reducers/characterReducer";
import { Link } from "react-router-dom";

//styles
import "./Styles/Class.css";

const Class = (props) => {
  const { name } = props.details;

  const selectClass = () => {
    props.selectClass(name);
  };

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
      <Link className="class-select-container" to="/ItemSelection" onClick={selectClass}>
        <div>
          <h1 className="class-name">{props.details.name}</h1>
          {jobMapped}
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    class: state.class,
    details: ownProps.details,
  };
};

export default connect(mapStateToProps, { selectClass })(Class);
// export default Class;
