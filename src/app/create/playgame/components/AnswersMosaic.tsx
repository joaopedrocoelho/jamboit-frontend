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
    <div
      className="flex w-full h-full flex-wrap
  "
    >
      {answers.map((answer) => (
        <div
          className="flex w-1/2 shrink-0 grow h-full text-lg"
          style={{
            backgroundColor: getRandomRGB(),
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
