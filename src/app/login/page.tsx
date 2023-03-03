"use client";
import BigButton from "@/components/BigButton";
import React, { useState } from "react";
import Image from "next/image";
import Paragraph from "@/components/Paragraph";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleLogin = async () => {
    setIsLoading(true);
    const redirect = await fetch("http://localhost:3000/api/login")
      .then((res) => res.text())
      .catch(setError)
      .finally(() => setIsLoading(false));
    //navigate to the redirect url
    if (redirect) window.location.href = redirect;
  };

  return (
    <div className="flex flex-col gap-14 items-center">
      <div className={` w-4/5 h-fit rounded-2xl flex justify-between`}>
        <div className="w-2/5 relative mr-8">
          <Image src="/img/placement_ilust.png" alt="illustration" fill />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h1 className="text-5xl font-bold mb-8 text-center">
            Jamboit turns boring quizzes into exciting multiplayer games!
          </h1>
          <Paragraph
            text="With Jamboit, you can take any Google Forms' quiz and make it a fun 
      and interactive experience that can be enjoyed by multiple players 
      in real-time."
          />
        </div>
      </div>
      <div
        className={` w-4/5 h-fit rounded-2xl flex  flex-col justify-between`}
      >
        <div className="flex flex-col justify-center items-center w-full h-fit">
          <div className="w-2/5 relative mr-8 h-32">
            <Image src="/img/placement_ilust.png" alt="illustration" fill />
          </div>
          <Paragraph
            text="Create your own game or join an existing one, 
      customize your preferences, and compete against your friends and peers. "
          />
          <h2 className="text-3xl font-bold mb-8 text-center">
            Get ready for a thrilling learning experience with Jamboit!
          </h2>
          <span className="flex w-full justify-center self-end mt-4">
            <BigButton onClick={() => handleLogin()} isLoading={isLoading}>
              Login with Google
            </BigButton>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
