import { Answer } from "@/models/game";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  selectActiveQuestion,
  selectActiveQuestionIdx,
  selectGame,
  setActiveQuestion,
} from "@/store/slices/game";
import {
  selectActivePlayer,
  selectPlayers,
  setActivePlayer,
  updateScore,
} from "@/store/slices/players";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { game } = useAppSelector(selectGame);
  const activeQuestion = useAppSelector(selectActiveQuestion);
  const activeQuestionIdx = useAppSelector(selectActiveQuestionIdx);

  return (
    <div className="flex w-full flex-wrap">
      {answers.map((answer, idx) => (
        <button
          className="flex w-1/2  grow text-2xl  items-center justify-center cursor-pointer"
          style={{
            backgroundColor: `rgba(0,0, 255, ${idx / answers.length})`,
          }}
          key={answer.id}
          onClick={() => {
            //THIS is all backend code actually
            //TODO: add bonus for faster players
            //TODO: add numeric keypad input
            const score = activeQuestion?.correctAnswer === answer.id ? 5 : 0;
            // dispatch(updateScore({ id: activePlayer.id, score }));
            // if (game!.questions.length >= activeQuestionIdx + 1) {
            //   dispatch(setActiveQuestion(activeQuestionIdx + 1));
            // } else {
            //   router.push("/score");
            // }
          }}
        >
          {answer.answer}
        </button>
      ))}
    </div>
  );
};

export default AnswersMosaic;
