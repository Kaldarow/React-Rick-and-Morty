import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../Helper/const";
import { Link } from "react-router-dom";

const RickandMorty = () => {
  const [characters, setCharacters] = useState([]);
  const getCharacters = async () => {
    const { data } = await axios(API);
    setCharacters(data.results);
  };
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div>
      <h1>All the characters from the episodes</h1>
      {characters.map((elem) => (
        <Link key={elem.id} to={`/Rick/${elem.id}`}>
          <div>
            <img src={elem.image} alt="" />
            <p>{elem.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default RickandMorty;    
