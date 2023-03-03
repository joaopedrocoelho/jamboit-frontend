import React, {useEffect} from "react";
import UserIcon from "public/user.svg";
import { useAuthenticateQuery } from "@/store";
import Image from "next/image";

const User = () => {
  const {data, error, isLoading} = useAuthenticateQuery();

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  if(data?.data?.displayName) {
  return (
    <div className="flex ml-auto place-items-center 
    text-xl font-semibold">
      {data.data?.displayName}
      <div className="bg-primary-300 rounded-full h-10 w-10 flex ml-4 relative">
        {data?.data?.photo ?
          <Image src={data.data.photo} alt={data.data?.displayName} fill className="rounded-full" /> :
          <UserIcon className="fill-primary-800 h-10 w-10" />}
      </div>
    </div>
  );
  }
};

export default User;
