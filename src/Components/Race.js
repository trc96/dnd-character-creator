import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Races from "./Arrays/Races";
import { connect } from "react-redux/es/exports";
import { selectRace } from "../redux/reducers/characterReducer";

//styles
import "./Styles/Race.css";

const Race = (props) => {
  const { name, index } = props.details;
  let [traits, setTraits] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.dnd5eapi.co/api/races/${index}/traits`)
      .then((res) => setTraits(res.data.results));
  }, []);

  const selectRace = () => {
    props.selectRace(props.details.name)
  }

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
      <div className="race-select-container" onClick={selectRace}>
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

const mapStateToProps = (state, ownProps) => {
  return {
    race: state.race,
    details: ownProps.details
  }
}

// export default Race;
export default connect(mapStateToProps, { selectRace })(Race)
