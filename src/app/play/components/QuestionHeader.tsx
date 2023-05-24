import React from "react";

const QuestionHeader = ({ question }: { question: string }) => {
  return (
    <p className="flex w-full text-4xl items-center font-bold tracking-wider justify-center p-10">
      {question}
    </p>
  );
};

export default QuestionHeader;
