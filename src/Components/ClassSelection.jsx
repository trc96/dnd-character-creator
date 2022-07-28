import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Class from "./Class";
import axios from "axios";
// import { connect } from "react-redux";
// import { selectClass } from "../redux/reducers/characterReducer";

//styles
import "./Styles/ClassSelection.css";

const ClassSelection = (props) => {
  // const {name} = props.details
  let [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.dnd5eapi.co/api/classes`)
      .then((res) => setClasses(res.data.results));
  }, []);

  const classesMapped = classes.map((job) => {
    return (
      <div key={job.index}>
        <Class details={job} />
      </div>
    );
  });

  // const selectClass = () => {
  //   props.selectClass(name);
  // };

  // const racesMapped = classes.map((race) => {
  //   return (
  //     <div key={race.index}>
  //         <Race details={race} />
  //     </div>
  //   );
  // });

  return (
    <div>
      <div className="website-background">
        <div className="header-container">
          <h1 className="h1-website-title">D&D 5e Character Creator</h1>
          <h2 className="h2-website-title">Class Selection</h2>
          <div className="button-container">
            <Link className="nav-btns" to="/RaceSelection">
              Go Back
            </Link>

            <Link className="nav-btns" to="/ItemSelection">
              Next
            </Link>
          </div>
        </div>
        {/* <div onClick={selectClass}>{classesMapped}</div> */}
        <div>{classesMapped}</div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => {
//   return {
//     class: state.class,
//     detials: ownProps.details,
//   };
// };

// export default connect(mapStateToProps, { selectClass })(ClassSelection);
export default ClassSelection
