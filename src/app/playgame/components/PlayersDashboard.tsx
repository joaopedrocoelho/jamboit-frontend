import { Player } from "@/models/player";
import React from "react";
import Image from "next/image";

interface Props {
  players: Player[];
  activePlayer: number;
}

const PlayersDashboard = ({ players, activePlayer }: Props) => {
  return (
    <div className="flex flex-col gap-y-5 p-10">
      {players.map((player, index) => (
        <ul key={player.id} className="flex gap-x-2">
          <li>
            <Image
              src={"/img/avatar.png"}
              width={50}
              height={80}
              alt={`${player.displayName}'s Avatar`}
            />
          </li>
          <li className={`${activePlayer === index && "font-bold"}`}>
            {player.displayName}
          </li>
          <li>{player.score}</li>
        </ul>
      ))}
    </div>
  );
};

export default PlayersDashboard;
