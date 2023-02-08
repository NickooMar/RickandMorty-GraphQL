import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../graphql/characters";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CharactersList = () => {
  const params = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: parseInt(params.page) },
  });

  console.log(data);

  if(loading) return <p>Loading...</p>

  return (
    <div>
      {data.characters.results.map((character) => (
        <h1>{character.name}</h1>
      ))}
      <div className="flex justify-around mx-10">
        <Link className="p-2 bg-slate-600 text-white rounded-lg" to={{pathname: '/characters/' + (parseInt(params.page) - 1)}}>Prev</Link>
        <Link className="p-2 bg-slate-600 text-white rounded-lg" to={{pathname: '/characters/' + (parseInt(params.page) + 1)}}>Next</Link>
      </div>
    </div>
  );
};

export default CharactersList;
