import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../Helper/const";

const RickandMortyDetail = () => {
  const { id } = useParams();
  const [ character, setCharacter ] = useState("");
  const getCharacter = async () => {
    const { data } = await axios(`${API}/${id}`);
    setCharacter(data);
  };
  console.log(character);
  useEffect(() => {
    getCharacter();
  }, [id]);
  return (
    <div>
      <img src={character.image} alt="" />
      <p>{character.name}</p>
      <span>{character.gender}</span>
      <br />
      <span>{character.status}</span>
    </div>
  );
};

export default RickandMortyDetail;
