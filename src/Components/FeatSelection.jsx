import { Link } from 'react-router-dom'

//styles
import './Styles/FeatSelection.css'

const FeatSelection = () => {
  return (
    <div>
      <div className="website-background">
        <div className="header-container">
          <h1 className="h1-website-title">DnD 5e Character Creator</h1>
          <div className="button-container">
            <Link className="nav-btns" to="/ClassSelection">
              Go Back
            </Link>
            <h2 className="h2-website-title">Feat Selection</h2>
            <Link className="nav-btns" to="/">
              Finished
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatSelection;
