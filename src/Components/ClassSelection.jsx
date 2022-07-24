import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Class from "./Class";
import axios from "axios";

//styles
import "./Styles/ClassSelection.css";

const ClassSelection = (props) => {
  let [classes, setClasses] = useState([])

  useEffect(() => {
    axios
      .get(`https://www.dnd5eapi.co/api/classes`)
      .then((res) => setClasses(res.data.results))
    }, [])

  const classesMapped = classes.map((job) => {
    return (
      <div key={job.index}>
        <Class details={job}/>
      </div>
    );
  });

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
          <h1 className="h1-website-title">DnD 5e Character Creator</h1>
          <h2 className="h2-website-title">Class Selection</h2>
          <div className="button-container">
            <Link className="nav-btns" to="/RaceSelection">
              Go Back
            </Link>
            
            <Link className="nav-btns" to="/FeatSelection">
              Next
            </Link>
          </div>
        </div>
            {classesMapped}
      </div>
    </div>
  );
};

export default ClassSelection;
