import { Answer } from "@/models/game";
import { useAppDispatch, useAppSelector } from "@/store";
import { selectActiveQuestion } from "@/store/slices/game";
import {
  selectActivePlayer,
  selectPlayers,
  updateScore,
} from "@/store/slices/players";
import React from "react";

interface Props {
  answers: Answer[];
}

function getRandomRGB(): string {
  const randomNumber = (): number => Math.floor(Math.random() * 256); // Generate random number from 0 to 255

  const r = randomNumber();
  const g = randomNumber();
  const b = randomNumber();

  return `rgb(${r}, ${g}, ${b})`;
}

const AnswersMosaic = ({ answers }: Props) => {
  const dispatch = useAppDispatch();
  const { activePlayerIdx, players } = useAppSelector(selectPlayers);
  const activeQuestion = useAppSelector(selectActiveQuestion);
  const activePlayer = useAppSelector(selectActivePlayer);

  return (
    <div className="flex w-full flex-wrap">
      {answers.map((answer, idx) => (
        <button
          className="flex w-1/2  grow text-lg items-center justify-center cursor-pointer"
          style={{
            backgroundColor: `rgba(0,0, 255, ${idx / answers.length})`,
          }}
          key={answer.id}
          onClick={() => {
            const score = activeQuestion?.correctAnswer === answer.id ? 5 : 0;
            dispatch(updateScore({ id: activePlayer.id, score }));
          }}
        >
          {answer.answer}
        </button>
      ))}
    </div>
  );
};

export default AnswersMosaic;
