import { Player } from "@/models/player";
import React from "react";
import Image from "next/image";

interface Props {
  players: Player[];
}

const PlayersDashboard = ({ players }: Props) => {
  return (
    <div className="flex flex-col gap-y-5">
      <h1>Players Dashboard</h1>
      {players.map((player) => (
        <ul key={player.id} className="flex gap-x-2">
          <li>
            <Image
              src={"img/avatar.png"}
              alt={`${player.displayName}'s Avatar`}
            />
          </li>
          <li>{player.displayName}</li>
          <li>{player.score}</li>
        </ul>
      ))}
    </div>
  );
};

export default PlayersDashboard;
