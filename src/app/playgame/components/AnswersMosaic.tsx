import { Answer } from "@/models/game";
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
  return (
    <div className="flex w-full flex-wrap">
      {answers.map((answer, idx) => (
        <div
          className="flex w-1/2  grow text-lg items-center justify-center"
          style={{
            backgroundColor: `rgba(0,0, 255, ${idx / answers.length})`,
          }}
          key={answer.id}
        >
          {answer.answer}
        </div>
      ))}
    </div>
  );
};

export default AnswersMosaic;
