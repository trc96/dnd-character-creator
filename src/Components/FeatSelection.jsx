import { Link } from 'react-router-dom'
import Feat from './Feat' 
import axios from 'axios';
import { useEffect, useState } from 'react';

//styles
import './Styles/FeatSelection.css'

const FeatSelection = (props) => {

  const [feats, setFeats] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.dnd5eapi.co/api/features/`)
      .then((res) => setFeats(res.data.results));
  });

  const featsMapped = feats.map((feat) => {
    return (
      <div key={feat.index}>
          <Feat details={feat}/>
      </div>
    );
  });

  return (
    <div>
      <div className="website-background">
        <div className="header-container">
          <h1 className="h1-website-title">DnD 5e Character Creator</h1>
          <h2 className="h2-website-title">Feat Selection</h2>
          <div className="button-container">
            <Link className="nav-btns" to="/ClassSelection">
              Go Back
            </Link>
            
            <Link className="nav-btns" to="/">
              Finished
            </Link>
          </div>
        </div>
        {/* {featsMapped} */}
      </div>
    </div>
  );
};

export default FeatSelection;
