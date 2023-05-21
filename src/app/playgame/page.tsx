"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { selectGame, setGame } from "@/store/slices/game";
import React from "react";
import AnswersMosaic from "../create/playgame/components/AnswersMosaic";
import { mockGame } from "@/mock/game";

const PlayGamePage = () => {
  const dispatch = useAppDispatch();
  const { game, activeQuestion } = useAppSelector(selectGame);
  dispatch(setGame(mockGame));
  return (
    <div className="flex w-full h-full">
      {game && (
        <AnswersMosaic answers={game.questions[activeQuestion].answers} />
      )}
    </div>
  );
};

export default PlayGamePage;
