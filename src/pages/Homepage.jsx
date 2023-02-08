import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import CharactersCard from "../components/Characters/CharactersCard";
import Banner from "../assets/Banner.png";

import { useQuery } from "@apollo/client";
import { CHARACTER_BY_ID, FOOTER_INFO } from "../graphql/characters";
import { Loader } from "../components/Loader";

var charactersId = [];

while (charactersId.length < 6) {
  charactersId.push(Math.floor(Math.random() * 824));
}

const Homepage = () => {
  const navigate = useNavigate();

  const {
    loading: characterLoading,
    error: characterError,
    data: characterData,
  } = useQuery(CHARACTER_BY_ID, {
    variables: {
      ids: charactersId,
    },
  });

  const { loading: footerInfoLoading, data: footerInfoData } =
    useQuery(FOOTER_INFO);

  if (characterLoading || footerInfoLoading)
    return (
      <div className="flex items-center justify-center mt-20 h-screen bg-[#272b33]">
        <Loader />
      </div>
    );

  return (
    <>
      <div className="h-1/2 w-full bg-white flex flex-col justify-center items-center ">
        <img
          src={Banner}
          alt="Banner"
          className="h-1/2 w-1/2 relative opacity-10"
        />
        <h1
          className="text-xl md:text-4xl lg:text-6xl font-semibold text-center absolute opacity-85"
          style={{ fontFamily: "montserrat" }}
        >
          The Rick and Morty API
        </h1>
      </div>

      <div className="h-1/2 bg-[#272b33] grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 py-4 pl-2 place-items-center overflow-x-hidden pb-[5rem] pt-[5rem]">
        {characterData.charactersByIds.map((character) => (
          <CharactersCard character={character} />
        ))}
      </div>

      <div className="relative bottom-0 h-full bg-[#202329] pt-[8rem] pb-[8rem]">
        <div className="flex justify-center items-center space-x-10">
          <h1
            className="text-[#9e9e9e] font-semibold "
            style={{ fontFamily: "montserrat" }}
          >
            CHARACTERS: {footerInfoData.characters.info.count}
          </h1>
          <h1
            className="text-[#9e9e9e] font-semibold "
            style={{ fontFamily: "montserrat" }}
          >
            LOCATIONS: {footerInfoData.locations.info.count}
          </h1>
          <h1
            className="text-[#9e9e9e] font-semibold "
            style={{ fontFamily: "montserrat" }}
          >
            EPISODES: {footerInfoData.episodes.info.count}
          </h1>
        </div>

        <div className="flex justify-center items-center mt-4">
          <h1
            className="text-[#9e9e9e] font-semibold text-center"
            style={{ fontFamily: "montserrat" }}
          >
            SERVER STATUS
          </h1>
          <p className="w-2 h-2 bg-green-400 rounded-full mx-2 mb-0.5" />
        </div>
        <div className="flex justify-center items-center">
          <h1
            className="text-[#9e9e9e] mt-4"
            style={{ fontFamily: "montserrat" }}
          >
            ❮❯ by{" "}
            <a
              href="https://github.com/NickooMar"
              className="text-white underline underline-offset-4 decoration-orange-400 font-semibold"
            >
              Nicolás Marsili
            </a>{" "}
            2023
          </h1>
        </div>
      </div>
    </>
  );
};

export default Homepage;
