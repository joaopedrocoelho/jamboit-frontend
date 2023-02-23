"use client"
import Link from "next/link";
import React, { ReactNode } from "react";
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {auth, UserData} from '@/firebase';
import {clearAuthUser, setAuthUser} from '@/reducers/auth/actions';
const Layout = ({ children }: { children: ReactNode }) => {
    const dispatch = useDispatch();
    const authUser = useSelector<{ authUser: UserData | null }, UserData | null>(
      (state) => state.authUser
    );
  
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user && authUser?.uid !== user.uid) {
            console.log("useAuth user", user)
            dispatch(setAuthUser(user));
          } else {
            dispatch(clearAuthUser());
          }
        });
    
        return () => unsubscribe();
      }, [dispatch]);
  

  return (
    <>
      <Link href="/">Home </Link>
      {children}
    </>
  );
};

export default Layout;
