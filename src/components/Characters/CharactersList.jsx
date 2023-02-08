import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../graphql/characters";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Loader } from "../Loader";
import CharactersCard from "./CharactersCard";

import Banner from "../../assets/Banner.png";

const CharactersList = () => {
  const params = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: parseInt(params.page) },
  });

  console.log(data);

  if (loading)
    return (
      <div className="flex items-center justify-center mt-20 h-screen bg-[#272b33]">
        <Loader />
      </div>
    );

  return (
    <div>
      <div className="h-full w-full bg-white flex flex-col justify-center items-center ">
        <img
          src={Banner}
          alt="Banner"
          className="h-1/2 w-1/2 relative opacity-10"
        />
        <h1
          className="text-7xl font-semibold text-center absolute opacity-85"
          style={{ fontFamily: "montserrat" }}
        >
          Characters
        </h1>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mx-2 py-4 place-items-center">
        {data.characters.results.map((character) => (
          <CharactersCard character={character} />
        ))}
      </div>

      <div className="flex justify-around mx-10 pb-5 pt-5">
        {parseInt(params.page) > 1 && (
          <Link
            className="p-2 rounded-lg w-full text-center bg-orange-500 text-white text-2xl mr-5"
            to={{ pathname: "/characters/" + (parseInt(params.page) - 1) }}
          >
            Prev
          </Link>
        )}

        {parseInt(params.page) < parseInt(data.characters.info.pages) && (
          <Link
            className="p-2 rounded-lg w-full text-center bg-orange-500 text-white text-2xl"
            to={{ pathname: "/characters/" + (parseInt(params.page) + 1) }}
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
};

export default CharactersList;
