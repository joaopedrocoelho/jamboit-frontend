'use client'
import Nav from "./login/Nav";
import { useEffect } from "react";
import { useAuthenticateQuery } from "@/store";
import BigButton from "@/components/BigButton";
import CarouselPagination from "@/components/carousel/CarouselPagination";
import Carousel from "@/components/carousel/Carousel";



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
  <Carousel />
  </>)
}

