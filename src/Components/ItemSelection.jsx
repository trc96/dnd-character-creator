import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

//styles
import "./Styles/ItemSelection.css";

const ItemSelection = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.dnd5eapi.co/api/magic-items/`)
      .then((res) => setItems(res.data.results));
  });

  const itemsMapped = items.map((item) => {
    return (
      <div key={item.index}>
        <Item details={item}/>
      </div>
    );
  });

  return (
    <div>
      <div className="website-background">
        <div className="header-container">
          <h1 className="h1-website-title">DnD 5e Character Creator</h1>
          <h2 className="h2-website-title">Item Selection</h2>
          <div className="button-container">
            <Link className="nav-btns" to="/ClassSelection">
              Go Back
            </Link>

            <Link className="nav-btns" to="/">
              Finished
            </Link>
          </div>
        </div>
        {itemsMapped}
      </div>
    </div>
  );
};

export default ItemSelection;
