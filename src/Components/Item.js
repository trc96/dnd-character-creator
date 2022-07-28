import axios from "axios";
import { useEffect, useState } from "react";
import { selectItem } from "../redux/reducers/characterReducer";
import { connect } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import characterReducer from "../redux/reducers/characterReducer";

//styles
import "./Styles/Item.css";
import store from "../redux/store";

const Item = (props) => {
  let character = useSelector((store) => store);

  const selectItem = () => {
    props.selectItem(props.details.name);
    console.log(props.details.name);
    console.log(character);
    addCharacter();
  };

  const addCharacter = () => {
    axios
      .post("http://localhost:3001/api/createCharacter", character)
      .then((res) => console.log(res.data));
  };

  // const finished = () => {
  //   return (
  //     <div className="header-container">
  //       <h1 className="h1-website-title">D&D 5e Character Creator</h1>
  //       <Link className="get-started-btn" to="/raceSelection">
  //         Finished?
  //       </Link>
  //     </div>
  //   );
  // };

  return (
    <div className="main">
      <Link className="item-select-container" to="/" onClick={selectItem}>
        <div>
          <h2 className="item-name">{props.details.name}</h2>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    race: state.race,
    item: state.item,
    details: ownProps.details,
  };
};

export default connect(mapStateToProps, { selectItem })(Item);
