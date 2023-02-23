
import { FC } from "react";
import { withLoading } from "../../components/Loading";
import { useAuthenticateQuery } from "@/store";

const Nav:FC = () => {
    const { data,  refetch, error } = useAuthenticateQuery();

    
    const handleLogout = async () => {
        await fetch('http://localhost:3000/api/logout', {
         credentials: 'include',
        }).then(
           (res) => {
             refetch()
           }
        )
       }


  return (
    <>
    <h1>
      {data?.data.displayName} {data?.data.email}
    </h1>
    <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
}

export default withLoading(Nav);