import axios from "axios";
import { useEffect, useState } from "react";

//styles
import './Styles/Item.css'

const Item = (props) => {
  return (
    <div className="main">
      <div className="item-select-container">
        <h2 className="item-name">{props.details.name}</h2>
      </div>
    </div>
  );
};

export default Item;
