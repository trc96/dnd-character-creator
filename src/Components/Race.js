import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Races from "./Races";

//styles
import "./Styles/Race.css";

const Race = (props) => {
  const { index } = props.details;
  let [traits, setTraits] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.dnd5eapi.co/api/races/${index}/traits`)
      .then((res) => setTraits(res.data.results));
  }, []);

  const descMapped = Races.filter((race) => {
    return race.name === props.details.name;
  }).map((desc) => {
    return (
      <div key={Races.id}>
        <h2 className="race-details">{desc.description}</h2>
      </div>
    );
  });

  return (
    <div className="main">
      <div className="race-select-container">
        <h1 className="race-name">{props.details.name}</h1>
        <h2 className="race-details">{descMapped}</h2>
        <h2 className="race-traits-title">Racial Traits</h2>
        {traits.map((trait) => {
          return <h2 className="race-details">{trait.name}</h2>;
        })}
      </div>
      {/* <Link className= "link" to={`/race/${name}`}> */}
      {/* </Link> */}
    </div>
  );
};

export default Race;
