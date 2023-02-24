'use client'
import { useEffect } from "react";
import { useAuthenticateQuery } from "@/store";
import { TutorialCarouselContext } from "./login/TutorialCarouselContext";
import TutorialCarousel from "./login/TutorialCarousel";




export default function Home() {
  const { data, error, isLoading, refetch } = useAuthenticateQuery();
  
  useEffect(() => {
    console.log('isloading', isLoading)
  }, [isLoading])
  
  
 

  const handleLogin = async () => {
    const redirect = await fetch('http://localhost:3000/api/login').then(
       (res) => res.text()
    )
    //navigate to the redirect url
    window.location.href = redirect
   }
 

  return (
  <>
  <TutorialCarousel />
  </>)
}

