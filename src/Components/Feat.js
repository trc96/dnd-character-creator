import axios from "axios";
import { useEffect, useState } from "react";

const Feat = (props) => {
  const { index } = props.details;
//   const [featClasses, setFeatClasses] = useState({});
//   const [featDescs, setFeatDescs] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`https://www.dnd5eapi.co/api/features/${index}`)
//       .then((res) => setFeatClasses(res.data.class.name));
//     axios
//       .get(`https://www.dnd5eapi.co/api/features/${index}`)
//       .then((res) => setFeatDescs(res.data.desc));
//   });

//   const featsMapped = featDescs
//     .filter((featDetail) => {
//       return featDetail.name === props.details.name;
//     })
//     .map((details) => {
//       return (
//         <div key={featDescs.id}>
//           <h2 className="feat-details">{details.class.name}</h2>
//           <h2 className="feat-details">{details.desc[0]}</h2>
//           <h2 className="feat-details">{details.desc[1]}</h2>
//         </div>
//       );
//     });

  return (
    <div className="main">
      <div className="feat-select-container">
        <h2 className="feat-name">{props.details.name}</h2>
        {/* {featDescs.map((feat) => {
          return <h2 className="feat-details">{feat.name}</h2>;
        })}
        {featsMapped} */}
      </div>
    </div>
  );
};

export default Feat;
