"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { selectGame, setGame } from "@/store/slices/game";
import React from "react";
import AnswersMosaic from "./components/AnswersMosaic";
import { mockGame } from "@/mock/game";
import PlayersDashboard from "./components/PlayersDashboard";
import Timer from "./components/Timer";

const PlayGamePage = () => {
  // const dispatch = useAppDispatch();
  const { game, activeQuestion } = useAppSelector(selectGame);
  // dispatch(setGame(mockGame));
  return (
    <div className="flex h-full">
      <Timer />
      <div className="flex w-full h-full">
        {mockGame && (
          <AnswersMosaic answers={mockGame.questions[activeQuestion].answers} />
        )}
      </div>
      <PlayersDashboard
        players={[
          {
            id: "1",
            displayName: "Player 1",
            score: 0,
            answers: new Map(),
          },
          {
            id: "2",
            displayName: "Player 2",
            score: 0,
            answers: new Map(),
          },
          {
            id: "3",
            displayName: "Player 3",
            score: 0,
            answers: new Map(),
          },
        ]}
      />
    </div>
  );
};

export default PlayGamePage;
