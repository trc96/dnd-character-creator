import Header from "./UI/Header";
import Routes from "../Routes";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect, useState } from "react";
import axios from "axios";

//styles
import "./Styles/Home.css";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  const character = useSelector((store) => store);
//   console.log(character);

  const addCharacter = () => {
    axios
    .post("http://localhost:3001/api/createCharacter", character)
    .then((res) => console.log(res.data));
  };
//   addCharacter()

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/characters")
      .then((res) => setCharacters(res.data));
  }, []);

  const charactersMapped = characters.map((character) => {
    return (
      <div className="main">
        <div className="character-container">
          <h1  className="race-name">{character.race}</h1>
          <h2 className="character-details">{character.class}</h2>
          <h2 className="character-details">{character.item}</h2>
          {/* <div className="image-container">
        </div> */}
        </div>
      </div>
    );
  });

  return (
    <div className="website-background">
      <Header />
      {charactersMapped}
    </div>
  );
};
export default Home;
