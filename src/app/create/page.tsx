"use client";

import QuizCarousel from "./QuizCarousel";
import BigButton from "@/components/BigButton";

const Create = () => {
 
    return (
        <div
        className={` w-4/5 h-fit rounded-2xl flex  flex-col justify-between items-center`}>
          <h1 className="text-5xl font-bold my-8 text-center">Choose a quiz from your Google Drive to make into a live game:</h1>
          <QuizCarousel />
          <h2 className="text-3xl font-bold my-8 text-center">Your Games:</h2>
          <QuizCarousel />

          <h1 className="text-5xl font-bold my-8 text-center">Looks like you don't have any quizzes in your Google Drive</h1>
          <div className="flex m-auto gap-8 w-4/5">
            <BigButton onClick={() => {}} isLoading={false}>Create quiz on Google Forms</BigButton>
            <BigButton onClick={() => {}} isLoading={false}>Reload your forms</BigButton>
            </div>       
        </div>
    );
};

export default Create;
