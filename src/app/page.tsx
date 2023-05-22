"use client";
import { useEffect } from "react";
import Login from "./(nongame)/login/page";
import Create from "./create/page";
import { useAuthenticateQuery } from "../store/api/userApi";
import Spinner from "public/spinner.svg";

export default function Home() {
  const { data, error, isLoading } = useAuthenticateQuery();

  if (isLoading) return;
  <div>
    <Spinner />
  </div>;

  if (!data || data.status == "not logged")
    return (
      //also handle errors here
      <Login />
    );

  return <Create />;
}
