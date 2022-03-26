import { DocumentData } from "firebase/firestore";
import { useState, useEffect } from "react";

// Local
import { DbRead } from "../database";

export default function About(): JSX.Element {
  const [gamesList, setGamesList] = useState<DocumentData[]>([]);

  useEffect(() => {
    async function getGames() {
      const dbData = await DbRead.games.fetch();
      setGamesList(dbData);
    }

    getGames();
  });

  return (
    <div className={"grid grid-cols-1 place-items-center h-full"}>
      <h1 className={"text-4xl"}>Hello Twitch Chat! 👋</h1>
      <ul>
        {gamesList.map((game) => {
          return (
            <li key={game.name}>
              <span className={"font-semibold"}>Name: {game.name}</span>
              <span className={"ml-4"}>Stars: {game.stars}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
