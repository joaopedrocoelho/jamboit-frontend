import { useState } from "react";
import BigBanner from "@/components/BigBanner";
import BigButton from "@/components/BigButton";
import Paragraph from "@/components/Paragraph";

const InfoBanner = () => {
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
    <BigBanner
      img="/img/placement_ilust.png"
      alt="illustration"
      bgColor="bg-primary-200"
    >
      <Paragraph 
      text="Jamboit turns boring quizzes into exciting multiplayer games! 
      With Jamboit, you can take any Google form quiz and make it a fun 
      and interactive experience that can be enjoyed by multiple players 
      in real-time. 
      Create your own game or join an existing one, 
      customize your preferences, and compete against your friends and peers. 
      Get ready for a thrilling learning experience with Jamboit!" />
    
    <span className="flex w-full justify-center">
      <BigButton 
      onClick={() => handleLogin()} isLoading={isLoading}>
        Login with Google
      </BigButton>
      </span>
    </BigBanner>
  );
};

export default InfoBanner;
