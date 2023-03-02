'use client'

import Login from "./login/page";




export default function Home() {
/*   const { data, error, isLoading, refetch } = useAuthenticateQuery();
  
  
  
 

  const handleLogin = async () => {
    const redirect = await fetch('http://localhost:3000/api/login').then(
       (res) => res.text()
    )
    //navigate to the redirect url
    window.location.href = redirect
   } */
 

  return (
  <Login />)
}

