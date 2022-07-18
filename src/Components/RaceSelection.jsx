import Header from "./Header";
import { Link } from "react-router-dom";

//styles
import "./Styles/RaceSelection.css";

const RaceSelection = () => {
  return (
    <div className="website-background">
      <div className="header-container">
        <h1 className="h1-website-title">DnD 5e Character Creator</h1>
        <div className="button-container">
          <Link className="nav-btns" to="/">
            Go Back
          </Link>
          <h2 className="h2-website-title">Race Selection</h2>
          <Link className="nav-btns" to="/ClassSelection">
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RaceSelection;
