import { Link } from "react-router-dom";

//styles
import "./Styles/ClassSelection.css";

const ClassSelection = () => {
  return (
    <div>
      <div className="website-background">
        <div className="header-container">
          <h1 className="h1-website-title">DnD 5e Character Creator</h1>
          <div className="button-container">
            <Link className="nav-btns" to="/RaceSelection">
              Go Back
            </Link>
            <h2 className="h2-website-title">Class Selection</h2>
            <Link className="nav-btns" to="/FeatSelection">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassSelection;
