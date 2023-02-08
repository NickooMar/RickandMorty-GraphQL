import React from "react";

const CharactersCard = ({ character }) => {
  return (
    <div className="flex w-full h-full bg-[#3c3e44] rounded-2xl shadow-md shadow-black">
      <img
        src={character.image}
        alt="avatar"
        className="rounded-l-2xl w-2/4 h-full"
      />
      <div className="w-full">
        <h1 className="text-2xl text-white text-center font-bold mt-2">
          {character.name}
        </h1>

        <div className="mx-4 mt-[2rem] mb-[2rem]">
          {character.status === "Alive" ? (
            <div className="flex mt-2">
              <p className="w-3 h-3 bg-green-500 rounded-full mt-1.5 mr-2" />
              <p className="text-white">
                {character.status} - {character.species}
              </p>
            </div>
          ) : character.status === "Dead" ? (
            <div className="flex mt-2">
              <p className="w-3 h-3 bg-red-500 rounded-full mt-1.5 mx-2" />
              <p className="text-white">
                {character.status} - {character.species}
              </p>
            </div>
          ) : (
            <div className="flex mt-2">
              <p className="w-3 h-3 bg-slate-300 rounded-full mt-1.5 mx-2" />
              <p className="text-white">
                {character.status} - {character.species}
              </p>
            </div>
          )}

          <p className="text-zinc-400 mt-2">Last known location:</p>
          <p className="text-white">{character.location.name}</p>

          <p className="text-zinc-400 mt-4">First seen in:</p>
          <p className="text-white">{character.episode[0].name}</p>
        </div>
      </div>
    </div>
  );
};

export default CharactersCard;
