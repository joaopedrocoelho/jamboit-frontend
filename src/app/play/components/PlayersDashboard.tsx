import { Player } from "@/models/player";
import React from "react";
import Image from "next/image";

interface Props {
  players: Player[];
}

const PlayersDashboard = ({ players }: Props) => {
  return (
    <div className="flex gap-x-5 p-10">
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
          <li className={``}>{player.displayName}</li>
          <li>{player.score}</li>
        </ul>
      ))}
    </div>
  );
};

export default PlayersDashboard;
