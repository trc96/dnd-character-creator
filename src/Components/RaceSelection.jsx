// import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Races from "./Arrays/Races";
import Race from "./Race";
import RaceDetails from "./RaceDetails";

//styles
import "./Styles/RaceSelection.css";

const RaceSelection = (props) => {
  // const { name, raceTraits, description } = props.details;
  // let [details, setDetails] = useState({});
  let [races, setRaces] = useState([]);
  let [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(`https://www.dnd5eapi.co/api/races`)
      .then((res) => setRaces(res.data.results));
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const racesMapped = races.map((race) => {
    return (
      <div key={race.index}>
          <Race details={race} />
      </div>
    );
  });

  return (
    <div className="website-background">
      <div className="header-container">
        <h1 className="h1-website-title">DnD 5e Character Creator</h1>
        <h2 className="h2-page-title">Race Selection</h2>
        <div className="button-container">
          <Link className="nav-btns" to="/">
            Go Back
          </Link>

          <Link className="nav-btns" to="/ClassSelection">
            Next
          </Link>
        </div>
      </div>
      <div className="main">
        <div>{racesMapped}</div>
        {/* <div className="race-select-container">
          {showModal && (
            <RaceDetails
              onClick={showModal}
              handleClose={handleClose}
              isMenuModal={false}
            ></RaceDetails>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default RaceSelection;
