"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { selectGame, setGame } from "@/store/slices/game";
import React, { useEffect } from "react";
import AnswersMosaic from "./components/AnswersMosaic";
import { mockGame } from "@/mock/game";
import PlayersDashboard from "./components/PlayersDashboard";
import Timer from "./components/Timer";
import { selectPlayers, setPlayers } from "@/store/slices/players";

const PlayGamePage = () => {
  const dispatch = useAppDispatch();
  const { game, activeQuestionIdx } = useAppSelector(selectGame);
  const { players, activePlayerIdx } = useAppSelector(selectPlayers);

  useEffect(() => {
    dispatch(
      setPlayers([
        {
          id: "1",
          displayName: "Player 1",
          score: 0,
          answers: {},
        },
        {
          id: "2",
          displayName: "Player 2",
          score: 0,
          answers: {},
        },
        {
          id: "3",
          displayName: "Player 3",
          score: 0,
          answers: {},
        },
      ])
    );
    dispatch(setGame(mockGame));
  }, [dispatch]);

  if (game && players)
    return (
      <div className="flex h-full">
        <Timer />
        <div className="flex w-full h-full">
          <AnswersMosaic answers={game.questions[activeQuestionIdx].answers} />
        </div>
        <PlayersDashboard players={players} activePlayer={activePlayerIdx} />
      </div>
    );

  return <div>Game not found</div>;
};

export default PlayGamePage;
