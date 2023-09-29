import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Detail() {

const {id} = useParams()

const [character, setcharacter] = useState({})

useEffect(() => {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setcharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setcharacter({});
}, [id]);

   return (
      <div>
         <h1>Detail</h1>
         <h1>{character.name}</h1>
         <h2>{character.status}</h2>
         <h2>{character.species}</h2>
         <h2>{character.gender}</h2>
         <h2>{character.origin?.name}</h2>
         <img src={character.image} alt= {character.name} />
      </div>
   );
}